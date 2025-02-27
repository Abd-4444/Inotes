import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {

const navigate = useNavigate()

  const logout=()=>{
    localStorage.removeItem("token")
    navigate("login")
    alert("Warning : you will be logout")
  }
  return (
    <div>
       <nav className ="navbar navbar-expand-lg  bg-primary  text-primary">
  <div className ="container-fluid text-light">
    
    <Link className ="navbar-brand" to="#">Inotes</Link> 
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">
        <li className ="nav-item text-light">
         {localStorage.getItem("token")? <Link className ="nav-link active" aria-current="page" to="/">Home</Link> :""}
        </li>
        <li className ="nav-item text-light">
          <Link className ="nav-link active" aria-current="page" to="about">About</Link> 
        </li>
        
         
       
      </ul>
      {!localStorage.getItem("token")?       <form className ="d-flex" role="search">
       <Link className="btn btn-success  mx-3" to="/login" role="button" diabled>Login</Link>
      <Link className="btn btn-success" to="/signup" role="button">signup</Link>

      </form>:<button type="button" class="btn btn-danger" onClick={logout}>logout</button>}
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar
