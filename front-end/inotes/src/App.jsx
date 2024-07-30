import React from 'react'
import Navbar from '../Navbar'
import Home from './Home'
import About from './About'
import { Routes , Route, useLocation} from "react-router-dom"
import NoteState from './context/NoteState.jsx'
import UserState from './context/UserState.jsx'
import Login from './Login.jsx'
import Signup from  "./Signup.jsx"

const App = () => {
  return (
    <><UserState>
      <NoteState>

      <Navbar/>
      <Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="about" element={<About/>}/>
<Route  path="signup" element={<Signup/>}/>
<Route  path="login" element={<Login/>}/>
</Routes>
</NoteState>
</UserState>
    </>
  )
}

export default App
