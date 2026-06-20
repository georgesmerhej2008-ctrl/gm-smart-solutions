function goContact(){

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

}



document
.getElementById("form")
.addEventListener("submit", function(event){


event.preventDefault();



let name = 
document.getElementById("name").value;


let phone = 
document.getElementById("contact").value;


let project = 
document.getElementById("message").value;



let whatsappText =

"Hello Georges 👋\n\n" +

"New Project Request\n\n" +

"Name: " + name + "\n\n" +

"Contact: " + phone + "\n\n" +

"Project:\n" + project;



let whatsappURL =

"https://wa.me/96176324451?text="

+

encodeURIComponent(whatsappText);



window.location.href = whatsappURL;



});
