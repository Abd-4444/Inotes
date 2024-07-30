import React ,{ useState,useContext } from 'react'
import UserContext from './context/UserContext'

import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const context = useContext(UserContext) 

      const [user , setUser]=useState()
  
      const onChange =(e)=>{
        setUser({...user , [e.target.name]:e.target.value})
   
    }
         
    const handleClick= (e)=>{
     e.preventDefault()
   fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email:user.email, password:user.password }),
  }).then(response => response.json()).then(data=>{console.log(data)
    
  if(data.success){
    localStorage.setItem("token" , data.authtoken)
    navigate("/")

  }else{
    alert(data.error)
  }

  })


  
    }
  
 

// const response = await    fetch('http://localhost:3000/api/v1/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({email , password
//       }),
//     })

//     const json  = await  response.json()
//   console.log(json)
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });

  

  return (
    <div>


        <div className="container">

        <h1 className="mb-3 my-5"> PLEASE ENTER YOUR LOGIN DETAILS</h1>

 <form onSubmit={handleClick}>
  <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email'  onChange={onChange} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"  onChange={onChange}   name="password" id="password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
</div>
    </div>
  )
}


export default Login
