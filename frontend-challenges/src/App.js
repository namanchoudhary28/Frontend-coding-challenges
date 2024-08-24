import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import StarRating from './Components/StarRating'
import ToastNotification from './Components/Toast/ToastNotification'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/toast-notify' element={<ToastNotification />} />


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App