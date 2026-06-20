function goContact(){

document
.getElementById("contact")
.scrollIntoView({

behavior:"smooth"

});

}




const form =
document.getElementById("form");


form.addEventListener("submit",(e)=>{


e.preventDefault();



let name =
document.getElementById("name").value;



let contact =
document.getElementById("contact").value;



let message =
document.getElementById("message").value;




let text =

`Hello Georges,

New Project Request:

Name:
${name}

Contact:
${contact}

Project:
${message}`;



let whatsapp =

"https://wa.me/96176324451?text="

+

encodeURIComponent(text);



window.open(
whatsapp,
"_blank"
);



});
