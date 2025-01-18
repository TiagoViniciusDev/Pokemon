import './Loading.css'

import { AiOutlineLoading } from "react-icons/ai";

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Loading() {

  const { loading } = useContext(PokemonTCGContext)

  return (
    <div className='Loading'>
        <div className='loadingContent'>
            <AiOutlineLoading />
            <p>Carregando...</p>
        </div>
    </div>
  )
}

export default Loading
