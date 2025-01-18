import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { PokemonTCGProvider } from './context/PokemonTCGContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PokemonTCGProvider>
      <App />
    </PokemonTCGProvider>
  </StrictMode>,
)
