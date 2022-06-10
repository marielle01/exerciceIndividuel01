var myName = "Marielle";
var salutation = "Bonjour" + " " + myName;
console.log(salutation);

myName = prompt ("Quel est ton prénom?");
console.log(myName);

document.body.innerHTML += "<h2>Bonjour " + myName + "!</h2>";