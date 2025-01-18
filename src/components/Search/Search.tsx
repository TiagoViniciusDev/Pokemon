import './Search.css'
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

//Context
import { useContext, useState } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Search() {

  const { setFilter, types } = useContext(PokemonTCGContext)
  const [search, setSearch] = useState<string>('')

  function searchByName(e){
    e.preventDefault()
    setFilter((prevFilter) => ({
        ...prevFilter, // mantém os outros valores
        q: search //inseri o texto na pesquisa
      }))
  }

  console.log(types)

  return (
    <div className='Search'>
        <div className='container'>
            <form onSubmit={searchByName}>
                <input type='search' placeholder='Pesquise um pokémon' onChange={(e) => {setSearch(e.target.value)}}/>
                <button type='submit'>
                    <CiSearch />
                </button>
            </form>
            <div className='filter'>
                <IoFilter />
                <p>Filtrar por:</p>
                <select>
                    <option>Tipo</option>
                    {types && types.length > 0 ? types.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    )) : ""}
                </select>
            </div>
        </div>
    </div>
  )
}

export default Search
