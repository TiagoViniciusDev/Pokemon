import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Navigation from './components/Navigation/Navigation'

import { useEffect } from 'react'

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from './context/PokemonTCGContext'

function App() {

  const { loading, setLoading, setError, data, setData, filter, setTypes } = useContext(PokemonTCGContext)

  const API_KEY = import.meta.env.VITE_API_KEY;

  async function getAllPokemons(query:string){
    setLoading(true)

    try {
      const Query = `https://api.pokemontcg.io/v2/cards?${query}`

      const response = await fetch(Query, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })

      if(!response.ok){
        throw new Error("Erro ao buscar as cartas")
      }

      const resultObj = await response.json()

      if(resultObj.data.length < 1){
        throw new Error("Nenhum carta encontrada")
      }


      console.log(await resultObj)
      setData(resultObj)  

      setError({
        value: false,
        message: ''
      })
      setLoading(false)
    } catch (error) {
      setError({
        value: true,
        message: error.message
      })
      setLoading(false)
      console.log(error)
    }
  }

  async function getAllTypes(){
    try {
      const response = await fetch("https://api.pokemontcg.io/v2/types", {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })

      if(!response.ok){
        throw new Error("Erro ao buscar tipos")
      }

      const resultObj = await response.json()

      if(resultObj.data.length < 1){
        throw new Error("Erro, o array de tipos está vazio")
      }

      setTypes(resultObj.data)
    } catch (error) {
      setError({
        value: true,
        message: error.message
      })
    }
  }

  useEffect(() => {
    let Query = `pageSize=${filter.pageSize}&page=${filter.page}`
    if(filter.q !== ''){
      Query = `pageSize=${filter.pageSize}&page=${filter.page}&q=name:${filter.q}*`
    }
    console.log(Query)
    getAllPokemons(Query)
  },[filter])

  useEffect(() => {
    getAllTypes()
  },[])

  return (
    <div>
      <Header />
      <Search />
      <Results />
      <Navigation />
    </div>
  )
}

export default App
