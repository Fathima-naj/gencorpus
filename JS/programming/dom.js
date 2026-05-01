let title=document.getElementById("title")
let box=document.getElementById("box")
let btn=document.getElementById("btn")

btn.addEventListener("click",function(){
    title.innerText="Dom updated !"
    box.style.backgroundColor="green"
    box.style.color="white"
})