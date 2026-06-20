function goContact(){

document
.getElementById("contact")
.scrollIntoView({

behavior:"smooth"

});

}




const projects =
document.querySelectorAll(".project");


projects.forEach(card=>{


card.onclick=()=>{


card.classList.toggle("active");


};


});