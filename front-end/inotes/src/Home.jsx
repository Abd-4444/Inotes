import React, { useContext, useEffect, useRef, useState } from 'react'
import Note from './Components/Note.jsx'
import NoteContext from './context/NoteContext.jsx'
import Form from './Components/Form.jsx'

const Home = () => {


  const context= useContext(NoteContext)

  const {notes ,getAllNotes,editNote}= context


  useEffect(()=>{

    getAllNotes()


  },[])



  const [eNote ,  setENote]=useState({id:''})

  const ref = useRef(null)

  const refClose = useRef(null)

  const updateNote=(currentnote)=>{
    setENote({id:currentnote._id})
  ref.current.click()
  
  
  }


  const onChange=(e)=>{

    setENote( {...eNote,[e.target.name]:e.target.value})
    
    console.log(eNote)
  }
  
  const editedNote=()=>{
  console.log("adding note")
  ref.current.click()
  editNote(eNote.etittle , eNote.edescription , eNote.etag, id )
  
  }
   



  return (
    <div className='container '>
           <Form/>
     




           <bu type="button" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
</bu>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
     
      <label htmlFor="exampleInputEmail1" className="form-label">Tittle</label>
    <input type="text" className="form-control" id="etittle"   onChange={onChange}  name="etittle"  value={eNote.etittle}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Enter the tittle here.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="text" className="form-control" id="edescription" value={eNote.edescription}  onChange={onChange} name="edescription"/>
  </div>
  <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
    <input type="text" className="form-control" id="etag" onChange={onChange} name="etag" />
    <button onClick={editedNote}    className="btn btn-primary" style={{cursor:"pointer"}}> update Note    </button>
  </div>
      </div>
      <div className="modal-footer">
        <button type="button"  ref={refClose}  className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>


{/* 
 <div className="note" style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"50px"}}>
{notel.map((notess ,index)=>{

 return<Note  tittle={notess.tittle}  description={notess.description} tag={notes.tag}/>

})}S
</div> */}
.
<div style={{display:"flex", justifyContent:'space-between', gap:"10px", flexWrap:"wrap"}}>
{notes.map((note, index)=>{


return <Note  key={index} tittle={note.tittle} description={note.description} tag={note.tag} id={note._id} updateNote={updateNote} note={eNote} />
 })}
 
 </div> 






    </div>

  )
}

export default Home
