let btn=document.querySelectorAll(".btn");
let myInput=document.querySelectorAll(".myInput");
let modal = document.querySelectorAll(".modal");
let w=100;

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",()=> {
        myInput[i].classList.toggle("myInput");
        modal[i].innerHTML=myInput[i].value;
        modal[i].style.width = 300+"px";
    })   
}
for (let i = 0; i < modal.length; i++) {
    modal[i].addEventListener("dblclick",()=>{
        modal[i].style.width = 10+"px";
        modal[i].style.heigth = 10+"px";
        modal[i].classList.add("sircle");
        modal[i].innerText="";
        modal[i].style.background = "white";
    }) 
}

    
