const express = require("express")
const User = require("../models/user.jsx")
const router = express.Router()
const { body, validationResult } = require("express-validator")
const user = require("../models/user.jsx")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const fetchUser = require("../middleware/fetchuser.jsx")

const jwt_secret = "adbdullahbillionare"


//  END POINT TO CREATE  A USER (api/v1/createuser)

router.post('/createuser', [
    body("name", "name shouldnot be less than three letters").isLength({ min: 3 }),
    body("email", "please enter a valid email").isEmail(),
    body("password").isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })

    }

    let user = await User.findOne({ email: req.body.email })

    if (user) {
        let success = false
        return res.status(400).json({ success, error: "sorry a user with this email alredy exists" })
    }

    const salt = await bcrypt.genSalt(10)

    const secPassword = await bcrypt.hash(req.body.password, salt)



    user = await User.create({

        name: req.body.name,
        password: secPassword,
     
        email: req.body.email
    })

    const data = {
        user: {
            id: user.id
        }
    }
  

    const authtoken = jwt.sign(data, jwt_secret)
      let success = true
    res.json({ success ,authtoken})

})
module.exports = router


//  END POIN  TO LOGIN  USER (api/v1/login)

router.post("/login", [

    body("email", "please enter a valid email").isEmail(),
    body("password").isLength({ min: 5 })



], async (req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })

    }

    const email= req.body.email;
    const password =req.body.password

    const user = await User.findOne({ email })

    if (!user) {

        return res.status(400).json({ error: 'please enter the valid credentials' })
    }



    let chkpassword = await bcrypt.compare(password, user.password)

    if (!chkpassword) {
        return res.status(400).json({ error: 'please enter the valid credentials' })

    }

    const data = {
        user: {
            id: user.id
        }
    }
 let success = true
    const authtoken = jwt.sign(data, jwt_secret)
    res.json({success, authtoken})









})


// GET LOGIN USER DETAILS (api/v1/getdetails)

router.post("/getdetails", fetchUser, async(req,res)=>{

   const userId= req.user.id 

const user = await User.findById(userId).select("-password")

if(!user){
    return res.status(400).json({ error: 'please enter the valid credentials' })
}
res.send(user)


})