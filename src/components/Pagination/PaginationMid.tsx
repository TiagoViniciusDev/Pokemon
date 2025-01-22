
function PaginationMid({page, numberOfPages, goToPage} : {page: number; numberOfPages: number; goToPage: (pageNumber: number) => void;}){
    return(
        <div>
            {/* Paginas anteriores */}
            {page > 2 ? (<div className='pageNumber' onClick={() => {goToPage(page - 2)}}><p>{page - 2}</p></div>) : ""}
            {page > 1 ? (<div className='pageNumber' onClick={() => {goToPage(page - 1)}}><p>{page - 1}</p></div>) : ""}

            <div className='pageNumber current'><p>{page}</p></div> {/* Página atual */}

            {/* Proximas paginas */}
            {page < numberOfPages ? (<div className='pageNumber' onClick={() => {goToPage(page + 1)}}><p>{page + 1}</p></div>) : ""}
            {page < numberOfPages - 1 ? (<div className='pageNumber' onClick={() => {goToPage(page + 2)}}><p>{page + 2}</p></div>) : ""}
            {page < 2 ? (<div className='pageNumber' onClick={() => {goToPage(4)}}><p>4</p></div>) : ""}
            {page < 3 ? (<div className='pageNumber' onClick={() => {goToPage(5)}}><p>5</p></div>) : ""}
        </div>
    )
}

export default PaginationMid