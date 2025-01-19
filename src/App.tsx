import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Navigation from './components/Navigation/Navigation'
import Modal from './components/Modal/Modal'

import { useEffect } from 'react'

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from './context/PokemonTCGContext'

function App() {

  const { setLoading, setError, setData, filter, setTypes, setRarities, setModalData } = useContext(PokemonTCGContext)

  // console.log(filter)

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

  async function getAllRarities(){
    try {
      const response = await fetch("https://api.pokemontcg.io/v2/rarities", {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })

      if(!response.ok){
        throw new Error("Erro ao buscar raridades")
      }

      const resultObj = await response.json()

      if(resultObj.data.length < 1){
        throw new Error("Erro, o array de raridades está vazio")
      }

      setRarities(resultObj.data)
    } catch (error) {
      setError({
        value: true,
        message: error.message
      })
    }
  }

  useEffect(() => {
    let Query = `pageSize=${filter.pageSize}&page=${filter.page}&q=name:${filter.q}* types:${filter.type} rarity:"${filter.rarity}"`

    if(filter.q == ''){
      Query = Query.replace(/name:[^ ]*\s?/, ""); //Remove o name:${filter.q}"
    }

    if(filter.type == 'all'){
      Query = Query.replace(/types:[^ ]*\s?/, ""); //Remove o types:${filter.type}
    }

    if(filter.rarity == 'all'){
      Query = Query.replace(/rarity:"[^"]*"\s?/, ""); //Remove o rarity:"${filter.rarity}"
    }

    if(filter.q == "" && filter.type == 'all' && filter.rarity == 'all'){
      Query = Query.replace(/&/, ""); //Remove o &
    }

    console.log(Query)
    getAllPokemons(Query)
  },[filter])

  useEffect(() => {
    getAllTypes()
    getAllRarities()
  },[])

  function checkModal(e){
    if (e.target.className === "Modal") {
      setModalData(undefined)
    }
  }

  return (
    <div onClick={checkModal}>
      <Header />
      <Search />
      <Modal />
      <Results />
      <Navigation />
    </div>
  )
}

export default App
