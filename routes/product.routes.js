const express = require("express")
const { productModel } = require("../models/product.model")
const { authentication } = require("../middleware/auth.middleware")
const { imgUpload } = require("../middleware/img.middleware")
const productRouter = express.Router()
productRouter.use(express.json())


// productRouter.post("/", authentication,imgUpload, async (req, res) => {
//     console.log("this is null one", req.body);
//     console.log(req);
//     try {
//         // res.send(req.body)
//         console.log(req.body.adminId);
//         const { name, rating, price, desc, categoryId } = req.body
//         // console.log(req.file);
//         const image = `images/${req.file.filename}`
//         await productModel.create({ name, rating, price, desc, image, categoryId })
//         res.send("product is succesfully created")
//     } catch (error) {
//         console.log(error);
//     }
// })

productRouter.post("/",imgUpload,authentication,async(req,res)=>{
    console.log(req.body);
    try {
        const image1 = `images/${req.file.filename}`
        req.body.image=image1
        await productModel.create(req.body)
        res.send("new product added")
    } catch (error) {
        console.log(error);
    }
})




module.exports = { productRouter }