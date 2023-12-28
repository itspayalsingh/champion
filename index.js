const express= require("express");
const { seqlize } = require("./configs/db");
const cors= require("cors");
const { adminRouter } = require("./routes/admin.routes");
const { categoryRouter } = require("./routes/category.routes");
const { productRouter } = require("./routes/product.routes");
const app= express();
app.use(cors())
require("dotenv").config()
app.use(express.json())
// app.use(express.static('styles'))
app.use("/styles",express.static('styles'))
app.use("/images",express.static('images/genral'))
app.use("/admin",adminRouter)
app.use("/category",categoryRouter)
app.use("/product",productRouter)

app.get("/",(req,res)=>{
    res.send("homepafdjn")
})
app.listen(process.env.port,async()=>{
    console.log(`server is running on ${process.env.port}`);
    try {
       await seqlize.authenticate()
       console.log(`connected to DB`);
    } catch (error) {
        console.log("error connecting DB");
        console.log(error);
    }
})