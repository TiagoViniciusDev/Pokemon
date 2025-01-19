import './CompareCards.css'

interface Option {
    id: string;
    name: string;
    hp: string;
    rarity: string;
    types: Array<string>;
    level: string | undefined;
    resistances: Array<object>;
    weaknesses: Array<object>;
}

interface InputsProps {
    inputs: {
      input1: Option | null;
      input2: Option | null;
    };
    onDrop: (inputKey: keyof InputsProps['inputs'], option: Option) => void;
}

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function CompareCards({ inputs, onDrop }: InputsProps){

    const { showCompareCards, setShowCompareCards } = useContext(PokemonTCGContext)

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }
    
    function handleDrop(e: React.DragEvent<HTMLDivElement>, inputKey: keyof InputsProps['inputs']) {
        const optionData = e.dataTransfer.getData('option');
        const option = JSON.parse(optionData) as Option; // Convertendo a string de volta para objeto
        onDrop(inputKey, option);
      }

    console.log(inputs)


    return(
        <section className='CompareCards' style={showCompareCards ? {display: 'block'} : {display: 'none'}}>
            <div className='container'>
                <div className='input' key="input1" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "input1" as keyof InputsProps['inputs'])} style={inputs.input1 ? {backgroundImage: `url(${inputs.input1.images.large})`} : {backgroundImage: "none"}}> 
                    <div className='inputInfo' style={inputs.input1 ? {display: "none"} : {display: "flex"}}>
                        <p>Carta 1</p>
                        <p>Arraste a carta</p>
                    </div>
                </div>

                <div className='dragInfo' style={inputs && inputs.input1 && inputs.input2 ? {display: "none"} : {display: "flex"}}>
                    <h3>Comparar Cartas</h3>
                    <p>Arraste as cartas para os campos para que elas sejam comparadas</p>
                </div>

                {inputs && inputs.input1 && inputs.input2 ? (
                    <div className='compareInfo'>
                        <div className='details'>
                            <p className='headerText'>{inputs.input1.name}</p>
                            <p><img src="./icon1.svg" alt="" /></p>
                            <p className='headerText'>{inputs.input2.name}</p>

                            {inputs.input1.hp ? <p>{inputs.input1.hp}</p> : <p>N/A</p>}
                            <p className='lineInfo'>HP</p>
                            {inputs.input2.hp ? <p>{inputs.input2.hp}</p> : <p>N/A</p>}

                            {inputs.input1.rarity ? <p>{inputs.input1.rarity}</p> : <p>N/A</p>}
                            <p className='lineInfo'>Raridade</p>
                            {inputs.input2.rarity ? <p>{inputs.input2.rarity}</p> : <p>N/A</p>}

                            {inputs.input1.types ? <p>{inputs.input1.types[0]}</p> : <p>N/A</p>}
                            <p className='lineInfo'>Tipo</p>
                            {inputs.input2.types ? <p>{inputs.input2.types[0]}</p> : <p>N/A</p>}

                            {inputs.input1.level ? <p>{inputs.input1.level}</p> : <p>N/A</p>}
                            <p className='lineInfo'>Level</p>
                            {inputs.input2.level ? <p>{inputs.input2.level}</p> : <p>N/A</p>}

                            {inputs.input1.resistances ? <p>{inputs.input1.resistances[0].type}: {inputs.input1.resistances[0].value}</p> : <p>N/A</p>}
                            <p className='lineInfo'>Resistências</p>
                            {inputs.input2.resistances ? <p>{inputs.input2.resistances[0].type} : {inputs.input2.resistances[0].value}</p> : <p>N/A</p>}

                            {inputs.input1.weaknesses ? <p>{inputs.input1.weaknesses[0].type}: {inputs.input1.weaknesses[0].value}</p> : <p>N/A</p>}
                            <p className='lineInfo'>Fraquezas</p>
                            {inputs.input2.weaknesses ? <p>{inputs.input2.weaknesses[0].type}: {inputs.input2.weaknesses[0].value}</p> : <p>N/A</p>} 
                        </div>
                    </div>
                ) : ""}

                <div className='input' key="input2" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, "input2" as keyof InputsProps['inputs'])} style={inputs.input2 ? {backgroundImage: `url(${inputs.input2.images.large})`} : {backgroundImage: "none"}}>
                    <div className='inputInfo' style={inputs.input2 ? {display: "none"} : {display: "flex"}}>
                        <p>Carta 2</p>
                        <p>Arraste a carta</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompareCards