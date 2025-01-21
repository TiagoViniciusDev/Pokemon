import './Error.css'

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Error(){

    const { error, setError } = useContext(PokemonTCGContext)

    function goHome(){
        window.location.reload();
    }

    return(
        <div className='Error'>
            <div className='errorMsg'>
                <h2>Error</h2>
                <p>{error.message}</p>
                <button onClick={goHome}>Voltar ao inicio</button>
            </div>
        </div>
    )
}

export default Error