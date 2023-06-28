let url="https://jsonplaceholder.typicode.com/todos/1"
let ans= async()=>{
    try {
        let ans1=await fetch(url)
        let ans2= await ans1.json()
        console.log(ans2);       
    } catch (error) {
        console.log("error occired");
    }
  
}  