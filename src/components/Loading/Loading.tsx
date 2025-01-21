import './Loading.css'

import { AiOutlineLoading } from "react-icons/ai";

function Loading() {

  return (
    <div className='Loading'>
        <div className='loadingContent'>
            <AiOutlineLoading />
            <p>Carregando...</p>
        </div>
    </div>
  )
}

export default Loading
