import './Header.css'

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Header() {

  const { darkMode, setDarkMode } = useContext(PokemonTCGContext)

  function toggleDarkMode(){
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("darkMode");
    } else {
      document.documentElement.classList.remove("darkMode");
    }
  };

  return (
    <header className='Header'>
        <div className='container'>
            <img src='./logo.svg'/>
            <div>
              <div className='theme' onClick={toggleDarkMode} title='Alterar tema'>{darkMode ? <MdDarkMode /> : <MdLightMode />}</div>
              <a href="https://docs.pokemontcg.io/api-reference/cards/search-cards/" target='_blank'>Documentação</a>
            </div>
        </div>
    </header>
  )
}

export default Header
