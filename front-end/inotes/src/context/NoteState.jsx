import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = (props)=>{

const  host = "localhost:3000"
  // const notel=[

  //   {tittle:"buckchod",
  //   description:"hello guyz chain pi lo",
  //   tag:"memes"},
    
    
  //   {tittle:"billionare",
  //     description:"buy a bugati",
  //     tag:"memes"},
      
  //   {tittle:"buckchod",
  //     description:"buy me a ferrari",
  //     tag:"memes"},
  //   ] 






    const [notes , setNotes]=useState([])





// TO FETCH ALL NOTES


const getAllNotes = async ()=>{
try{
const response = await fetch(`http://${host}/api/v1/fetchnote`, {
  method:"GET",
  headers:{
    "auth-token":localStorage.getItem("token")
  } })

if(!response.ok){

  throw new Error('network response waas not okay')
}

  const data =  await response.json()

  console.log(data)

  setNotes(data)
}catch (error) { // Set error state if fetch fails
  console.error('Error fetching data:', error);
}



}





//  TO CREATE A NOTE

const addNote= async(tittle , description , tag)=>{


try{
  const response = await fetch(`http://${host}/api/v1/createNote`, {
    method:"POST",
    headers:{
      "Content-type":"application/json",
      "auth-token":localStorage.getItem("token")
    },
    
    body:JSON.stringify({tittle,description,tag})

    
    } )
    if(!response.ok){
      throw new Error('response not ok')
    }

    const data= await response.json()

    console.log(data)
  setNotes(notes.concat(data))

console.log(notes)
}catch(error){
  console.error(error)
}


}









// TO DELTE NOTES
const deleteNote = async( id)=>{

console.log(id)
try{
  const response = await fetch(`http://${host}/api/v1/deletenote/${id}`, {
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem("token")
    },
  } )
  if(!response.ok){
    throw new Error('response not ok')
  }

  const noteData= await response.json()
console.log(noteData)
const filterd = notes.filter((note)=>note._id!==id)
setNotes(filterd)


}catch(error){
console.error(error)
}
}



// TO EDIT NOTE

const editNote= async(tittle , description , tag ,id)=>{
console.log(id)
 try{

  const response = await fetch(`http://${host}/api/v1/updateNote/${id}`, {
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem("token")
    },
body:JSON.stringify({tittle,description,tag,id})

  })
  if(!response.ok){
    throw new Error('response not ok')
  }

const data= await response.json()

   let newNote =  JSON.parse(JSON.stringify(notes))
for(let index=0 ; index< newNote.length; index ++){
  console.log(index.id)
const element =newNote [index]
if(element._id===id){
  newNote[index].tittle=tittle,
  newNote[index].description=description,
  newNote[index].tag=tag
  break;
}
}
setNotes(newNote)

  console.log(id)

 }
 catch(error){
  console.error(error)
 }
  





}










return(

    <NoteContext.Provider  value={{notes , addNote, getAllNotes,  deleteNote,editNote ,}}>

      {props.children}
    </NoteContext.Provider>
)

}



export default NoteState
