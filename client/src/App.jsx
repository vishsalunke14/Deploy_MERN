import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginSuccess from './LoginSuccess'


function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/loginsuccess' element={<LoginSuccess />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
