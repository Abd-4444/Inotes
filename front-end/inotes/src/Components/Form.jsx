import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext.jsx'
const Form = () => {

const  context = useContext(NoteContext)
const{addNote}=context
    const [note , setNote] = useState({})
  
const onChange =(e)=>{
    setNote({...note , [e.target.name]:e.target.value})

}
     
const addingNote=(e)=>{
 e.preventDefault()
    addNote(note.tittle,note.description,note.tag)
setNote({tittle:"" , description:"" , tag:""})
}
  return (

    <div>

<form>
  <div className="mb-3 my-5">
 

    <label htmlFor="exampleInputEmail1" className="form-label">Tittle</label>
    <input type="text" className="form-control" id="tittle"  onChange={onChange} value={note.tittle}  name="tittle"  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Enter the tittle here.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="description"  value={note.description}onChange={onChange} name="description"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" value={note.tag} onChange={onChange} name="tag" />
  </div>
  <button type="submit" className="btn btn-primary"    onClick={addingNote}>Add Note</button>
</form>

      
    </div>
  )
}

export default Form
