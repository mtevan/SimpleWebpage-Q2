
import './index.css'
import Footer from './Components/Footer'
import MainContent from './Components/mainContent'
import Header from './Components/Header.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Header/>

  <MainContent/>

  <Footer/>
  </StrictMode>,
)
