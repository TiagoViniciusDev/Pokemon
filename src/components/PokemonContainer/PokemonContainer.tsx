import './PokemonContainer.css'

import { dataInterface } from '../../interfaces/interfaces.ts';

interface Option {
  id: string;
  name: string;
}

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function PokemonContainer({data}: {data: dataInterface;}){

  const { setModalData } = useContext(PokemonTCGContext)

  function handleDragStart(e: React.DragEvent<HTMLDivElement>, option: Option) {
    e.dataTransfer.setData('option', JSON.stringify(option)); // Armazenando o objeto como string
  }

  return (
    <div className='PokemonContainer' onClick={() => {setModalData(data)}} key="Option1" draggable onDragStart={(e) => handleDragStart(e, data)}>
        <img src={data.images.large} alt={data.name} /> 
        <div className='info'>
            <div>
                {data.name ? <h3>{data.name}</h3> : <h3>N/A</h3>}
                {data.types ? <p>{data.types[0]}</p> : <p>N/A</p>}
            </div>
            <div>
                <img src={data.set.images.symbol} alt={data.name} />
                {data.rarity ? <p>{data.rarity}</p> : <p>N/A</p>}
            </div>
        </div>  
    </div>
  )
}

export default PokemonContainer
