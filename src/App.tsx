import './App.css'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Results from './components/Results/Results'
import Navigation from './components/Navigation/Navigation'

import { useState, useEffect } from 'react'

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from './context/PokemonTCGContext'

function App() {

  const { loading, setLoading, data, setData, filter } = useContext(PokemonTCGContext)

  async function getAllPokemons(filter){
    setLoading(true)

    try {
      const API_KEY = import.meta.env.VITE_API_KEY;

      const Query = `https://api.pokemontcg.io/v2/cards?${filter}`

      const response = await fetch(Query, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })

      const resultObj = await response.json()
      console.log(await resultObj)
      setData(resultObj)  

      
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    const Query = `pageSize=${filter.pageSize}&page=${filter.page}`
    console.log(Query)
    getAllPokemons(Query)
  },[filter])

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
