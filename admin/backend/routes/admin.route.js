const express = require("express")
const { admin_model } = require("../model/admin.model")
const { general_upload } = require("../middlewares/general.multer")
const admin_router = express.Router()

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


// let link= require("../up")

admin_router.post("/add", async (req, res) => {
    try {
        let data = await admin_model.create(req.body)
        res.send(data);
    } catch (error) {
        res.send("error")
    }
})



module.exports = { admin_router }