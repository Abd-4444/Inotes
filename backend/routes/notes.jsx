const express = require("express")
const Notes = require("../models/Notes.jsx")
const router = express.Router()

const { body, validationResult } = require("express-validator")


const fetchUser = require("../middleware/fetchuser.jsx")





//  End point to fetch all notes

router.get("/fetchnote", fetchUser , async (req,res)=>{

const note = await Notes.find({User:req.user.id})

res.json(note)

} )








//  END POINT TO CREATE NOTES
router.post("/createNote",  [
    body("tittle", "tittle shouldnot be less than three letters").isLength({ min: 3 }),
    body("description", "description shouldnot be less than three letters").isLength({min:3}),

], fetchUser,  async (req,res)=>{

    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })

    }

   const{tittle, description, tag} = req.body


   const note = new Notes({
tittle , description, tag , User:req.user.id

   })

   const savedNote = await note.save()
   
   res.json(savedNote)

})




//  END POINT TO UPDATE NOTE

router.put('/updateNote/:id', fetchUser, async (req,res)=>{

const {tittle , description , tag}= req.body;

const newNote = {}

if(tittle){ newNote.tittle=tittle}
if(description){newNote.description=description}
if(tag){newNote.tag=tag}

let note =await Notes.findById(req.params.id)
if(!note){
    return res.status(400).send("not found")
}
 note = await Notes.findByIdAndUpdate(req.params.id ,{$set : newNote},  {new:true})

res.json({message:"note updated successfuly"})









})






router.delete('/deletenote/:id', fetchUser, async (req,res)=>{



let note = await Notes.findById(req.params.id)
if(!note){return res.status(400).send("not found")}

note = await Notes.findByIdAndDelete(req.params.id)

res.send({message:"note deletedd succesfullyy"})

})
module.exports = router