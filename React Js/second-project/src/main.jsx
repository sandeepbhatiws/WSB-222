import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Components/HomePage'
// import './assets/css/style.css'
import ShowHidePassword from './Components/ShowHidePassword'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage/> */}

    <ShowHidePassword/>

  </StrictMode>,
)
