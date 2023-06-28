const fs = require("fs")
// fs.readFileSync("1.json", { "encoding": "utf-8" }, async (ans,error) => {
//     try {
//         console.log(ans);
//     } catch (error) {
//         console.log("error ");
//     }
// })

// console.log(fs);
function a(){
    fs.readFileSync("./1.json",{encoding:"utf-8"},async(error,ans)=>{
        if(error){
            console.log("error occured");
        }else{
            let ans2=await ans
            console.log(ans);
        }
    })
}
a()
 