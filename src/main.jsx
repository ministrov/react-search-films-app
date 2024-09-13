import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { films } from './const/const.js'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App films={films}/>
  </StrictMode>,
)
