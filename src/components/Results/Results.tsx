import './Results.css'
import PokemonContainer from '../PokemonContainer/PokemonContainer'
import Loading from '../Loading/Loading.tsx';

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Results() {

  const { loading, data } = useContext(PokemonTCGContext)

  return (
    <main className='Results'>
        <div className='container'>
            <header>
                <img src='./icon1.svg'/>
                <p>{data && !loading ? `Total de ${data.totalCount} Pokémons` : 'Pokémons'}</p> 
            </header>
            <div className='searchResults'>
                {data && !loading ? data.data.map((item) => (
                    <PokemonContainer key={item.id} data={item}/>
                )) : (<Loading />)}
            </div>
        </div>
    </main>
  )
}

export default Results