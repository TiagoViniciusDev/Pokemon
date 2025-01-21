import './Modal.css'

import { IoMdClose } from "react-icons/io";

//Context
import { useContext } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Modal(){

    const { modalData, setModalData } = useContext(PokemonTCGContext)

    if(modalData){
        return(
            <div className='Modal' style={modalData ? {display: "flex"} : {display: "none"}}>   
                <div className='modalContent'>
                    <img src={modalData.images.large} alt={modalData.name} />
                    <div className='info'>
                        <header>
                            <div>
                                {modalData.name ? <h2>{modalData.name}</h2> : <h2>N/A</h2>}
                                {modalData.supertype && modalData.subtypes[0] ? <p>{modalData.supertype} - {modalData.subtypes[0]}</p> : <p>N/A</p>}
                            </div>
                            <div>
                                {modalData.hp ? <p>HP {modalData.hp}</p> : <p>N/A</p>}
                                <button className='close' title='fechar' onClick={() => {setModalData(undefined)}}>
                                    <IoMdClose />
                                </button>
                            </div>
                        </header>

                        <div className='skills'>
                            <p className='title'>Habilidades</p>
                            {modalData.abilities ? modalData.abilities.map((ability) => (
                                <div className='skill' key={ability.name}>
                                    <div className='skillHeader'>
                                        <p className='type'>{ability.type}</p>
                                        <p>{ability.name}</p>
                                    </div>
                                    <p>{ability.text}</p>
                                </div>
                            )) : <p>N/A</p>}
                        </div>

                        <div className='attacks'>
                            <p className='title'>Ataques</p>
                            <div className='attacksContainer'>
                                {modalData.attacks ? modalData.attacks.map((attack) => (
                                    <div className='attack' key={attack.name}>
                                        <div className='attackHeader'>
                                            <p>{attack.name}</p>
                                            <p>Dano: {attack.damage}</p>
                                        </div>
                                        <p>{attack.text}</p>
                                    </div>
                                )) : <p>N/A</p>}
                            </div>
                        </div>

                        <div className='attributes'>
                            <div className='resistances item'>
                                <p>RESISTÊNCIA</p>
                                <div className='itemInfo'>
                                    {modalData.resistances ? modalData.resistances.map((resistance) => (
                                        <p key={resistance.type}>{resistance.type}: {resistance.value}</p>
                                    )) : <p>N/A</p>}
                                </div>
                            </div>

                            <div className='weaknesses item'>
                                <p>Fraquezas</p>
                                <div className='itemInfo'>
                                    {modalData.weaknesses ? modalData.weaknesses.map((weakness) => (
                                        <p key={weakness.type}>{weakness.type}: {weakness.value}</p>
                                    )) : <p>N/A</p>}
                                </div>
                            </div>

                            <div className='set item'>
                                <p>SET</p>
                                <div className='itemInfo'>
                                    <img src={modalData.set.images.symbol} alt="simbolo" />
                                    {modalData.set.name ? <p>{modalData.set.name}</p> : <p>N/A</p>}
                                </div>
                            </div>

                            <div className='rarity item'>
                                <p>Raridade</p>
                                <div className='itemInfo'>
                                    {modalData.rarity ? <p>{modalData.rarity}</p> : <p>N/A</p>} 
                                </div>
                            </div>
                        </div>

                        <div className='markets'>
                            <p className='title'>Mercado</p>
                            <div className='marketOptions'>
                                {modalData.cardmarket ? (
                                    <div className='market'>
                                        <a href={modalData.cardmarket.url} target='_blank' title='Clique para visitar'>Cardmarket</a>
                                        <p>Preço: €{modalData.cardmarket.prices.avg1}</p>
                                        <p>Preço medio: €{modalData.cardmarket.prices.averageSellPrice}</p>
                                    </div>
                                ) : <p>N/A</p>}

                                {modalData.tcgplayer ? (
                                    <div className='market'>
                                        <a href={modalData.tcgplayer.url} target='_blank' title='Clique para visitar'>Tcgplayer</a>
                                        {modalData.tcgplayer.prices.holofoil ? (<p>Preço: ${modalData.tcgplayer.prices.holofoil.market}</p>) : <p>N/A</p>}
                                        {modalData.tcgplayer.prices.holofoil ? (<p>Preço medio: ${modalData.tcgplayer.prices.holofoil.mid}</p>) : <p>N/A</p>}
                                    </div>  
                                ) : <p>N/A</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal