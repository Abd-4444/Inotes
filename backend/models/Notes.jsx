const mongoose = require ("mongoose")
const {Schema}= mongoose;
const NotesSchema = new Schema(
{

      User:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

    },

tittle:{
type:String,
required:true,

},

description:{
type :String,
 required:true,

},

tag:{
type:String,
default:"General"
},
date:{

type:Date,
default:Date.now
}
}
)


module.exports=mongoose.model("notes", NotesSchema)