import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import '../src/assets/css/style.css'
import RootLayout from './Components/Common/RootLayout'
import AboutLayout from './Components/Common/AboutLayout'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>

        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AboutLayout />}>
          <Route path='/about-us' element={<Home />} />
        </Route>

        <Route path='/admin-panel'>
          
          <Route path='categories'>
              <Route path='create' element={<Home />} />
              <Route path='view' element={<Home />} />
              <Route path='update/:id' element={<Home />} />
              <Route path='details/:id' element={<Home />} />
          </Route>

          <Route path='products'>

          </Route>

        </Route>



      </Routes>
    </BrowserRouter>
  </>,
)
