let square = document.querySelector(".square")

for(i=0;i<364;i++){
    let mini = document.createElement("div")
    square.appendChild(mini)
    mini.classList.add("mini")
    mini.addEventListener("mouseover",function(){
        mini.style.backgroundColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        mini.style.transitionDuration ="0s"
    })
    mini.addEventListener("mouseout",function(){
        mini.style.backgroundColor = "black"
        mini.style.transitionDuration= "1.5s"
    })
}