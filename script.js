console.log("GM Website Loaded");


function goContact(){

document
.getElementById("contact")
.scrollIntoView({

behavior:"smooth"

});

}




document
.getElementById("projectForm")
.addEventListener("submit", function(e){


e.preventDefault();



let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let message =
document.getElementById("message").value;



let text =

"Hello Georges 👋\n\n"+

"New Project Request\n\n"+

"Name: "+name+"\n\n"+

"Contact: "+email+"\n\n"+

"Project:\n"+message;



let link =

"https://wa.me/96176324451?text="

+

encodeURIComponent(text);



window.open(link,"_blank");



});
