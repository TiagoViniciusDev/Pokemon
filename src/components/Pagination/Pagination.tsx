import './Pagination.css'
import { MdNavigateBefore } from "react-icons/md";

import PaginationLarge from './PaginationLarge.tsx';
import PaginationMid from './PaginationMid.tsx';
import PaginationSmall from './PaginationSmall.tsx';

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



  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(windowSize)

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

              {windowSize > 764 ? 
                <PaginationLarge page={filter.page} numberOfPages={numberOfPages} goToPage={goToPage}/> 
                : windowSize > 500 ? 
                <PaginationMid page={filter.page} numberOfPages={numberOfPages} goToPage={goToPage}/> : 
                <PaginationSmall page={filter.page} numberOfPages={numberOfPages} goToPage={goToPage}/>
              }
              
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
