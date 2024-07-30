const mongoose = require("mongoose");
const uri = ("mongodb://localhost:27017/inotebook")

const conectMongo= ()=>{

    mongoose.connect(uri).then(
        console.log("conected  to mongodb  successdully")
    )
}



module.exports = conectMongo;