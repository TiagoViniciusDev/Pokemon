import './PokemonContainer.css'

interface Option {
  id: string;
  name: string;
}

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function PokemonContainer({data}) {

  const { setModalData } = useContext(PokemonTCGContext)

  function handleDragStart(e: React.DragEvent<HTMLDivElement>, option: Option) {
    e.dataTransfer.setData('option', JSON.stringify(option)); // Armazenando o objeto como string
  }

  return (
    <div className='PokemonContainer' onClick={() => {setModalData(data)}} key="Option1" draggable onDragStart={(e) => handleDragStart(e, data)}>
        <img src={data.images.large} alt={data.name} /> 
        <div className='info'>
            <div>
                <h3>{data.name}</h3>
                <p>{data.types[0]}</p>
            </div>
            <div>
                <img src={data.set.images.symbol} alt={data.name} />
                <p>{data.rarity}</p>
            </div>
        </div>  
    </div>
  )
}

export default PokemonContainer
