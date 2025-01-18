import './PokemonContainer.css'

function PokemonContainer({data}) { 

  return (
    <div className='PokemonContainer'>
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
