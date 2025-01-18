import './Header.css'

function Header() {

  return (
    <header className='Header'>
        <div className='container'>
            <img src='./logo.svg'/>
            <a href="https://docs.pokemontcg.io/api-reference/cards/search-cards/" target='_blank'>Documentação</a>
        </div>
    </header>
  )
}

export default Header
