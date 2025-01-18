import './Search.css'
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";

function Search() {

  return (
    <div className='Search'>
        <div className='container'>
            <form>
                <input type='search' placeholder='Pesquise um pokémon'/>
                <button type='submit'>
                    <CiSearch />
                </button>
            </form>
            <div className='filter'>
                <IoFilter />
                <p>Filtrar por:</p>
                <select>
                    <option>Tipo</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Search
