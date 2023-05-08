require("dotenv").config() 

const {Sequelize} = require("sequelize")
const seqlize= new Sequelize("champ",'root',process.env.db_pass,{
    host:'localhost',
    dialect:'mysql'
})


module.exports = {seqlize}



// champ ===> db name
// root  ===> username of the sql user
 
 