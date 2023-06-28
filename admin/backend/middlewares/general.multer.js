const multer = require("multer")
const path= require("path")

// const general_upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             const store= path.join(__dirname,'..','..','images','genral')
//             cb(null, store)
//         },
//         filename: (req, file, cb) => {
//             // const filename = req.query.filename
//             // cb(null, filename);
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file")
const general_upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const store = path.join(__dirname, '..','..', '..', 'images', 'genral');
            cb(null, store);
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("user_file");




module.exports= {general_upload}

