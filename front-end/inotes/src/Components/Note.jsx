import React, { useContext ,} from 'react'
import NoteContext from '../context/NoteContext.jsx'
import NoteState from '../context/NoteState.jsx'
const Note = ({tittle , description , tag ,id,updateNote,note}) => {

  const context= useContext(NoteContext)

  const {deleteNote,}=context









  return (
    <div>
      

      <div className="card" style={{width:"18rem"}}>
  
  <div className="card-body">
  <i className="fa-solid fa-pen-to-square" style={{float:"right" , cursor:"pointer", gap:'20', margin:"10px"}} onClick={()=>{updateNote(note)}}></i>

  <i className="fa fa-trash" aria-hidden="true" style={{float:"right" , cursor:"pointer", margin:"10px"}} onClick={()=>deleteNote(id)}></i>
    <h5 className="card-title">{tittle}</h5>
    <p className="card-text">{description }</p>
    <a href="#" className="btn btn-primary">{tag}</a>
    
  </div>




</div>


</div>

  )
}

export default Note
