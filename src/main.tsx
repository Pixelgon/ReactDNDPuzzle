import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PuzzleProvider } from './providers/PuzzleProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PuzzleProvider >
      <App />  
    </PuzzleProvider>
  </React.StrictMode>,
)
