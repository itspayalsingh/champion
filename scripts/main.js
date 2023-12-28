window.addEventListener("DOMContentLoaded", (e) => {
    let stage = document.querySelector("#mainslide")
    let arr = document.getElementsByTagName("a")
    let over = document.querySelectorAll(".overlay")
    setTimeout(() => {
        over[0].style.opacity = 1;
        over[0].style.transition = "3s";
    }, 100);
    let progressBars = document.querySelectorAll(".bar")
    progressBars[0].style.animation = "progress 4s linear"
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("animationend", () => {
            // stage.innerHTML+=`${arr[0]}`
            stage.appendChild(arr[0])
            over[i].style.opacity = 1
            over[i].style.transition = "3s"
            progressBars[i].style.animation = "none"
            setTimeout(() => {
                progressBars[i].style.animation = "progress 4s linear"
            }, 0)
        })


        arr[i].addEventListener("animationstart", () => {
            over[i].style.opacity = 0
            over[i].style.transition = "none"
        })

    }
})

document.querySelector("#adminLogin").addEventListener("click",()=>{
    window.location.href='../public/adminLogin.html'
})