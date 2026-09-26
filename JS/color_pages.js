let test = localStorage.getItem("color")
if(test === "white"){
document.body.classList.add("white")
}else{
    document.body.classList.add("color")
}