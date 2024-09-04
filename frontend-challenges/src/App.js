import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import StarRating from './Components/StarRating'
import ToastNotification from './Components/Toast/ToastNotification'
import MainAcccordian from './Components/Accordian/MainAcccordian'
import RegistrationForm from './Components/RegistrationForm'
import Todo from './Todo'
import Autosearch from './Components/Autosearch/Autosearch'
import  Pagination  from './Components/Pagination/Pagination'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/star-rating' element={<StarRating />} />
      <Route path='/toast-notify' element={<ToastNotification />} />
      <Route path='/accordian' element={<MainAcccordian />} />
      <Route path='/form' element={<RegistrationForm />} />
      <Route path='/todo' element={<Todo />} />
      <Route path='/search' element={<Autosearch />} />
      <Route path='/pagination' element={<Pagination />} />


    </Routes>
    
    
    </BrowserRouter>
  )
}

export default App