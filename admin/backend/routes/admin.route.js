const express = require("express")
const { admin_model } = require("../model/admin.model")
const { general_upload } = require("../middlewares/general.multer")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const admin_router = express.Router()
admin_router.use(express.json())







admin_router.get("/", (req, res) => {
  res.send("admin page is here")
})

admin_router.post("/image", general_upload, (req, res) => {
  try {
    res.send("photo uploaded")
  } catch (error) {
    console.log(error);
  }

})

//Admin Creation

admin_router.post("/add", async (req, res) => {
  try {
    const { fullname, email, password, username } = req.body;
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("error while hasing the password");
      } else {
        await admin_model.create({ fullname, email, password: hash, username })
        res.send("data have been updated for the admins")
      }
    })
  } catch (error) {
    console.log(error);
  }
})



//Admin Login

admin_router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await admin_model.findOne({
      where: {
        username: username
      }
    })
    if (data) {
      bcrypt.compare(password, data.password, (err, ans) => {
        if (ans) {
          let token= jwt.verify()
        } else {
          console.log("wrrrrong password");
        }
      })
    } else {
      console.log("wrong email id");
    }

  } catch (error) {
    console.log(error);
  }
})










module.exports = { admin_router }





































