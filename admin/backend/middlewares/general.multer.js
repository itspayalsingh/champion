const multer = require("multer")
// const {hello} = require("../")
// const { hello } = require("../../../images/genral")

const general_upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "up")
        },
        filename: (req, file, cb) => {
            // const filename = req.query.filename
            // cb(null, filename);
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")



module.exports= {general_upload}

