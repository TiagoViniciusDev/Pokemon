import './Error.css'

//Context
import { useContext  } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Error(){

    const { error } = useContext(PokemonTCGContext)

    return(
        <div className='Error'>
            <p>{error.message}</p>
        </div>
    )
}

export default Error