let header = document.querySelector("header")
header.addEventListener("wheel", event =>{
    if(event.deltaY>0){
        header.classList.add("select")
    } else{
        header.classList.remove("select")
    }
})