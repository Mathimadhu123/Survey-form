let btnClear = document.querySelector('button');
let inputs = document.querySelector('input');
let select = document.querySelector('select');

 btnClear.addEventListner('click', () => {
    inputs.foreach(input => input.value= ' ');
 });

document.getElementById("submit").addEventListener("submit", function(event){ 
    event.preventDefault();
const fname = document.getElementById("fname").value;
const lname = document.getElementById("lname").value;
const dob = document.getElementById("dob").value;
const country = document.getElementById("country").value;
const male = document.getElementById("male").value;
const female = document.getElementById("female").value;
const profession = document.getElementById("profession").value;
const email = document.getElementById("email").value;
const num = document.getElementById("num").value;

const displayContent = 'First Name :${fname} <br> Last Name :${lname} <br> Date of Birth:${dob} <br> country :${country}  <br>  ';
document.getElementById("displayArea").innerHTML = displayContent;
});