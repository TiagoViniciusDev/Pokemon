import './CompareCards.css'

interface Option {
    id: string;
    name: string;
}

interface InputsProps {
    inputs: {
      input1: Option | null;
      input2: Option | null;
    };
    onDrop: (inputKey: keyof InputsProps['inputs'], option: Option) => void;
}

function CompareCards({ inputs, onDrop }: InputsProps){

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
        <section className='CompareCards'>
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
                        <header>
                            <p>{inputs.input1.name}</p>
                            <img src="./icon1.svg" alt="" />
                            <p>{inputs.input2.name}</p>
                        </header>

                        <div className='details'>
                            <div className='row'>
                                <p>{inputs.input1.hp}</p>
                                <p>HP</p>
                                <p>{inputs.input2.hp}</p>
                            </div>
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