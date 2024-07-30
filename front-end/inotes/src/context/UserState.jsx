import React, { useState } from 'react'
import UserContext from './UserContext'
import { useNavigate } from "react-router-dom";
const UserState = (props) => {

  const host = "localhost:3000"
  const navigate = useNavigate();

  const createUser = (name , email , password) => {
   fetch('http://localhost:3000/api/v1/createuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({name , email, password
    }),
  }).then(response => response.json()).then(data=>{console.log(data)

    if(data.success){
      localStorage.setItem("token" , data.authtoken)
navigate("/")
    }else{
      alert(data.error)
    }
  })
  


  }





  const loginUser =  (email,password) => {

fetch('http://localhost:3000/api/v1/login', {
 method: 'POST',
 headers: {
   'Content-Type': 'application/json',
 },
 body: JSON.stringify({email,password})
}).then(response => response.json()).then(
 data=> {
   console.log({data})
 }
)



  }



  return (

    <UserContext.Provider value={{ loginUser, createUser }}>
  
      {props.children}

    </UserContext.Provider>


  )
}

export default UserState
