import { FormEvent } from 'react';

import './Search.css'
import { CiSearch } from "react-icons/ci";

//Context
import { useContext, useState } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Search() {

  const { setFilter, types, rarities, showCompareCards, setShowCompareCards } = useContext(PokemonTCGContext)
  const [search, setSearch] = useState<string>('')

  function searchByName(e: FormEvent){
    e.preventDefault()
    setFilter((prevFilter) => ({
        ...prevFilter, // mantém os outros valores
        q: search //inseri o texto na pesquisa
      }))
  }

  function searchByType(cardType:string){
    setFilter((prevFilter) => ({
        ...prevFilter, // mantém os outros valores
        type: cardType 
      }))
  }

  function searchByRarity(cardRarity:string){
    setFilter((prevFilter) => ({
        ...prevFilter, // mantém os outros valores
        rarity: cardRarity
      }))
  }

  return (
    <section className='Search'>
        <div className='container'>
            <form onSubmit={searchByName}>
                <input type='text' placeholder='Pesquise um pokémon' name='buscar' onChange={(e) => {setSearch(e.target.value)}}/>
                <button type='submit'>
                    <CiSearch />
                </button>
            </form>

            <div className='filter'>
                <div className='compare' onClick={() => {setShowCompareCards(!showCompareCards)}}>
                    <p>Comparar cartas</p>
                </div>

                <div className='selectFilter'>
                    <span>Tipo:</span>
                    <select defaultValue="all" onChange={(e) => {searchByType(e.target.value)}}>
                        <option value="all">Todos</option>
                        {types && types.length > 0 ? types.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        )) : ""}
                    </select>
                </div>

                <div className='selectFilter'>
                    <span>Raridade:</span>
                    <select defaultValue="all" onChange={(e) => {searchByRarity(e.target.value)}}>
                        <option value="all">Todos</option>  
                        {rarities && rarities.length > 0 ? rarities.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        )) : ""}
                    </select>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search
