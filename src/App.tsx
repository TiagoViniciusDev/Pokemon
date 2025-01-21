import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import CompareCards from './components/CompareCards/CompareCards'
import Results from './components/Results/Results'
import Pagination from './components/Pagination/Pagination'
import Modal from './components/Modal/Modal'

import { dataInterface } from './interfaces/interfaces'

import { useEffect, useState } from 'react'

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from './context/PokemonTCGContext'

function App() {

  const { setLoading, setError, setData, filter, setTypes, setRarities } = useContext(PokemonTCGContext)

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
    let Query = `&q=name:${filter.q}* types:${filter.type} rarity:"${filter.rarity}"`

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

    const FinalQuery = `pageSize=${filter.pageSize}&page=${filter.page}${Query}`

    console.log(FinalQuery)
    getAllPokemons(FinalQuery)
  },[filter])

  useEffect(() => {
    getAllTypes()
    getAllRarities()
  },[])
  
  interface InputsState {
    input1: dataInterface | null;
    input2: dataInterface | null;
  }

  const [inputs, setInputs] = useState<InputsState>({ input1: null, input2: null });

  console.log(inputs)

  function handleDrop(inputKey: keyof InputsState, option: dataInterface) {
    setInputs((prev) => ({
      ...prev,  
      [inputKey]: option,
    }));
  }

  return (
    <div>
      <Header />
      <Search />
      <CompareCards inputs={inputs} onDrop={handleDrop} setInputs={setInputs} />
      <Modal />
      <Results />
      <Pagination />
    </div>
  )
}

export default App
