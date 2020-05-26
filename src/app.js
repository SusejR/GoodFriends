let result = [];
myData()
const container = document.getElementById("container");
const button = document.getElementById("buttonHome").addEventListener("click", show);
const home = document.getElementById("home");



function myData() {
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => {
         result = data.results
    })
}
function show() {
    container.innerHTML=""
    result.forEach(element => {
        showCard(element);
        
    });
}

function showCard(person) {
    container.innerHTML+=`<div class="card mt-5">
    <img src="${person.picture.large}" class="card-img-top" alt="FotodePerfil">
    <div class="card-body">
      <h5 class="card-title"> Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</h5>
      <p class="card-text pCard">Pais: ${person.location.country}</p>
      <p class="card-text pCard">Edad: ${person.dob.age}</p>
      <p class="card-text pCard">Email: ${person.email}</p>
      <p class="card-text pCard">Fono: ${person.cell}</p>
    </div>`
    
    }



