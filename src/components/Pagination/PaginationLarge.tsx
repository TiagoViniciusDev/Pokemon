
function PaginationLarge({page, numberOfPages, goToPage} : {page: number; numberOfPages: number; goToPage: (pageNumber: number) => void;}){
    return(
        <div>
            {/* Páginas anterioriores */}
            {page > 4 ? ( 
                <>  
                    <div className='pageNumber'onClick={() => {goToPage(1)}}><p>1</p></div>
                    <div className='pageNumber interval'><p>...</p></div>
                </>
                ) : "" }
              {page > 2 ? (<div className='pageNumber' onClick={() => {goToPage(page - 2)}}><p>{page - 2}</p></div>) : ""}
              {page > 1 ? (<div className='pageNumber' onClick={() => {goToPage(page - 1)}}><p>{page - 1}</p></div>) : ""}

              <div className='pageNumber current'><p>{page}</p></div> {/* Página atual */}

              {/* Ultimas páginas */}
              {page < numberOfPages ? (<div className='pageNumber' onClick={() => {goToPage(page + 1)}}><p>{page + 1}</p></div>) : ""}
              {page < numberOfPages - 1 ? (<div className='pageNumber' onClick={() => {goToPage(page + 2)}}><p>{page + 2}</p></div>) : ""}
              {page > 4 || numberOfPages < 4 ? "" : (<div className='pageNumber' onClick={() => {goToPage(page + 3)}}><p>{page + 3}</p></div>)}
              {page > 1 || numberOfPages < 5 ? "" : (<div className='pageNumber' onClick={() => {goToPage(page + 4)}}><p>{page + 4}</p></div>)}

              {page < numberOfPages - 2 ? ( 
                <>  
                    <div className='pageNumber interval'><p>...</p></div>
                    <div className='pageNumber'onClick={() => {goToPage(numberOfPages)}}><p>{numberOfPages}</p></div> 
                </>
                ) : "" }
        </div>                    
    )
}

export default PaginationLarge