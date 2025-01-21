import './Pagination.css'
import { MdNavigateBefore } from "react-icons/md";

//Context
import { useContext, useState, useEffect } from 'react';
import { PokemonTCGContext } from '../../context/PokemonTCGContext.tsx';

function Pagination() {

  const { data, filter, setFilter} = useContext(PokemonTCGContext)
  const [numberOfPages, setNumberOfPages] = useState<number>(0)

  useEffect(() => {
    if(data){
      setNumberOfPages(Math.ceil(data.totalCount/20))
    }
  },[data])



  function nextPage(){
    if(filter.page < numberOfPages){
      setFilter((prevFilter) => ({
        ...prevFilter, // mantém os outros valores
        page: prevFilter.page + 1 //Vai para proxima página
      }))
    }
  }

  function previousPage(){
    if(filter.page > 1){
      setFilter((prevFilter) => ({
        ...prevFilter, 
        page: prevFilter.page - 1 //Vai para página anterior
      }))
    }
  }

  function goToPage(pageNumber:number){
    setFilter((prevFilter) => ({
      ...prevFilter, 
      page: pageNumber //Vai para página indicada
    }))
  }

  return (
    <nav className='Pagination'>
        <div className='container'>
            <div className='btn' onClick={previousPage} style={filter.page < 2 ? {color: "var(--mainColor)"} : {}}>
                <MdNavigateBefore />
                <p style={filter.page < 2 ? {color: "#B6B8BC"} : {}}>Anterior</p>
            </div>

            <div className='pages'>
              {/* Páginas anterioriores */}
              {filter.page > 4 ? ( 
                <>  
                    <div className='pageNumber'onClick={() => {goToPage(1)}}><p>1</p></div>
                    <div className='pageNumber interval'><p>...</p></div>
                </>
                ) : "" }
              {filter.page > 2 ? (<div className='pageNumber' onClick={() => {goToPage(filter.page - 2)}}><p>{filter.page - 2}</p></div>) : ""}
              {filter.page > 1 ? (<div className='pageNumber' onClick={() => {goToPage(filter.page - 1)}}><p>{filter.page - 1}</p></div>) : ""}

              <div className='pageNumber current'><p>{filter.page}</p></div> {/* Página atual */}

              {/* Ultimas páginas */}
              {filter.page < numberOfPages ? (<div className='pageNumber' onClick={() => {goToPage(filter.page + 1)}}><p>{filter.page + 1}</p></div>) : ""}
              {filter.page < numberOfPages - 1 ? (<div className='pageNumber' onClick={() => {goToPage(filter.page + 2)}}><p>{filter.page + 2}</p></div>) : ""}
              {filter.page > 4 || numberOfPages < 4 ? "" : (<div className='pageNumber' onClick={() => {goToPage(filter.page + 3)}}><p>{filter.page + 3}</p></div>)}
              {filter.page > 1 || numberOfPages < 5 ? "" : (<div className='pageNumber' onClick={() => {goToPage(filter.page + 4)}}><p>{filter.page + 4}</p></div>)}

              {filter.page < numberOfPages - 2 ? ( 
                <>  
                    <div className='pageNumber interval'><p>...</p></div>
                    <div className='pageNumber'onClick={() => {goToPage(numberOfPages)}}><p>{numberOfPages}</p></div> 
                </>
                ) : "" }
            </div>

            <div className='btn' onClick={nextPage} style={filter.page >= numberOfPages ? {color: "var(--mainColor)"} : {}}>
                <p style={filter.page >= numberOfPages ? {color: "#B6B8BC"} : {}}>Próximo</p>
                <MdNavigateBefore style={{rotate: '180deg'}}/>
            </div>
        </div>
    </nav>
  )
}

export default Pagination
