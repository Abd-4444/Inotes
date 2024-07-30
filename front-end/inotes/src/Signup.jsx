import React ,{ useState,useContext } from 'react'
import UserContext from './context/UserContext.jsx'
const Signup = () => {

    const context = useContext(UserContext) 
const {createUser} = context
    const [user , setUser]=useState({ name:"" , password:"", email:""})






    const onChange =(e)=>{
      setUser({...user , [e.target.name]:e.target.value})
 
  }
       
  const addingUser= (e)=>{
   e.preventDefault()
   createUser(user.name , user.email ,user.password)

  //  fetch('http://localhost:3000/api/v1/createuser', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({name:user.name , email:user.email, password:user.password
  //         }),
  //       }).then(response => response.json()).then(
  //         data=> {
  //           console.log({sucees :data})
  //         }
  //       )
  
      }











    // const [name , setName]=useState()
    // const[email , setEmail]=useState()
    // const [password, setPassword]=useState()

    // const changeName=(event)=>{

    //   setName(event.target.value)
    // }
    // const changeEmail=(event)=>{

    //   setEmail(event.target.value)
    // }
  
    // const changePassword=(event)=>{

    //   setPassword(event.target.value)
    // }
  



  

  
        
      
    
//     const handleClick= ()=>{


// let newObj ={
// name:name,
// password:password,
// email:email

// }
// setUser({...user,newObj})

// createUser(user.name , user.email , user.password)
    
    //   fetch('http://localhost:3000/api/v1/createuser', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({name, email , password
    //     }),
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // }
  return (

    

    <div className='container'>







<form>
<h1 className="mb-3 my-5"> PLEASE ENTER YOUR SIGNUP DETAILS</h1>
  <div className="mb-3 my-5">
 

    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="text" className="form-control" id="name"  onChange={onChange}  name="name"  minLength={5} required aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Enter the tittle here.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">email</label>
    <input type="email" className="form-control" id="email" onChange={onChange} name="email"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">password</label>
    <input type="password" className="form-control"  minLength={5} id="password" required onChange={onChange} name="password" />
  </div>
  <button type="submit" className="btn btn-primary"   onClick={addingUser}>Create User</button>
</form>










      {/* <div className="container">
 <form>
 <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter your name</label>
    <input type="text" className="form-control" id="name"  onChange={changeName} name='name'/>
  </div>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"   onChange={changeEmail}name='email' aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  onChange={changePassword} id="password" name="password"/>
  </div>

  

</form>
<button type="submit"   onClick={handleClick} className="btn btn-primary">Signup</button>
</div> */}
    </div>
  )
}

export default Signup
