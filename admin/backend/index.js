const express = require("express");
const { seqlize } = require("./config/db");
const { admin_router } = require("./routes/admin.route");
require("dotenv").config()

const app= express()

app.use("/admin",admin_router)
app.get("/",(req,res)=>{
  res.send("Champion Server This side (Home Page)")
})


app.listen(process.env.port,async()=>{
    console.log(`Champion Server is running ON ${process.env.port}`);
    try {
      await seqlize.authenticate();
      console.log("connected to db");
    } catch (error) {
        console.log("facing error while connecting");
    }
})