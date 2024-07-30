const  express = require("express")
const cors = require('cors');
const app = express()

const port = 3000

const conectMongo= require("./database.jsx")

app.use(cors())
app.use(express.json())

app.use("/api/v1", require ("./routes/auth.jsx"))
app.use("/api/v1", require ("./routes/notes.jsx"))


app.get("/",(req,res)=>{

res.send("hellooo chjomuuu")


})
 
app.listen(port,()=>{

    console.log(`inote app listening at http://localhost:${port}`)
})

conectMongo();