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
    result.forEach((element, index) => {
        showCard(element, index);
        
    });
    modal();

 }

function showCard(person, index) {
    container.innerHTML+=`<div class="card mt-5">
    <img src="${person.picture.large}" class="card-img-top" alt="FotodePerfil">
    <div class="card-body">
      <h5 class="card-title"> Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</h5>
      <p class="card-text pCard">Pais: ${person.location.country}</p>
      <p class="card-text pCard">Edad: ${person.dob.age}</p>
      

      <!-- Button trigger modal -->
<button type="button" id="botonModal" class="btn" onClick="modalResults(${index})" data-toggle="modal" data-target="#modal">
  Conocer Más
</button>
    </div>`
    
    }
    const modalResults = (index) => {
        const myModal = document.getElementById("myModal");
        myModal.innerHTML=`<div class="modal-header">
        <h5>Información del Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="row">
      <div class="col col-lg-4">
      <img src="${result[index].picture.large}" alt="FotodePerfil">
      </div>
      <div class="col col-lg-8">
      <h5>${result[index].name.first} ${result[index].name.last}</h5>
      <p><strong>Edad: </strong> ${result[index].dob.age}</p>
      <p id="titulo"><strong>Nombre de Usuario: </strong> ${result[index].login.username}</>
      </div>
      </div>
      <div class="row">
      <div class="col col-lg-6 col-12">
      <p><strong>Locación: </strong></p>
        <p id="titulo"><strong>Pais: </strong> ${result[index].location.country}</p>
        <p id="titulo"><strong>Ciudad: </strong> ${result[index].location.city}</p>
      </div>
      <div class="col col-lg-6 col-12">
      <p><strong>Datos de Contacto: </strong></p>
      <p id="titulo"><strong>Email: </strong>${result[index].email}</p>
      <p id="titulo"><strong>Fono: </strong> ${result[index].cell}</p>
      </div>
      </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        
      </div>`
    }
    const modal = () => {
        container.innerHTML+=`
        <!-- Modal -->
        <div class="modal modal fade" id="modal">
          <div class="modal-dialog">
            <div class="modal-content" id="myModal">
             
            </div>
          </div>
        </div>`
    }



