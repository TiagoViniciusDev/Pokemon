import './Header.css'

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

import { useEffect } from 'react';

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Header() {

  const { darkMode, setDarkMode } = useContext(PokemonTCGContext)

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true"

    if(savedMode){
      setDarkMode(true)
      document.documentElement.classList.add("darkMode");
    }
  }, []);

  function toggleDarkMode(){
    const themeMode = !darkMode
    setDarkMode(themeMode);
    localStorage.setItem("darkMode", String(themeMode)); //Salvando preferencia de tema no localstorage
    if (themeMode) {
      document.documentElement.classList.add("darkMode");
    } else {
      document.documentElement.classList.remove("darkMode");
    }
  };

  return (
    <header className='Header'>
        <div className='container'>
            <img src='./logo2.svg' alt='logo'/>
            <div>
              <div className='theme' onClick={toggleDarkMode} title='Alterar tema'>{darkMode ? <MdDarkMode /> : <MdLightMode />}</div>
              <a href="https://docs.pokemontcg.io/api-reference/cards/search-cards/" target='_blank'>Documentação</a>
            </div>
        </div>
    </header>
  )
}

export default Header
