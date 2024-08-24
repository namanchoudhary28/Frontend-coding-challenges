import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import StarRating from './Components/StarRating'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/star-rating' element={<StarRating />} />


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App