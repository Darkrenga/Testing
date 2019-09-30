function validatetextbox() {
    
let box = document.getElementById("USERNAME");
let box2 = document.getElementById("PASSWORD");

 if (box.value == ""|| box2.value =="") {
     alert("The field cannot be blank");
     return false;
 }
}