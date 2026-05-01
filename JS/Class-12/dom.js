// console.log("DOM connected");

const title = document.getElementById("title");
const box = document.getElementById("box");
const btn = document.getElementById("btn");

btn.addEventListener("click", function(){

title.innerText = "DOM Updated!";
title.style.color = "green";

box.innerHTML = "<b>Text changed using JavaScript</b>";
box.style.backgroundColor = "#bfdbfe";

});

/* Mouse Events */

title.addEventListener("mouseover", function(){
title.style.color = "red";
});

title.addEventListener("mouseout", function(){
title.style.color = "green";
});


/* Keyboard Event */

document.addEventListener("keydown", function(event){
console.log("Key pressed:", event.key);
});


// /* Creating a new element dynamically */

// const newPara = document.createElement("p");
// newPara.innerText = "This paragraph was created using JavaScript DOM.";
// document.body.appendChild(newPara);