function imprimirTarjetas(array = []){

console.log(array)

let = arrayOfCards =""

array.forEach( item => {

    let statusColor = item.status === "Alive" ? "success" : "danger"

arrayOfCards += `

<div class="card" style="width: 30rem;">
          <img src="${item.image}" class="card-img-top" alt="imagen personaje">
          <div class="card-body">
              <p>${item.name} -<span class="text-${statusColor}">${item.status}</span></p>
              <p>${item.species}</p>
              <p>${item.location.name}</p>
          </div>
        </div>
`
})
document.querySelector("#printer").innerHTML = arrayOfCards
}


//  Me devuelve los personajes que yo le diga 
function getCharacters(){

//  Definir URL

const URL = "https://rickandmortyapi.com/api/character/1,183,83"

// Consumir la URL con fetch

fetch(URL).then(response=>{
// Detectamos si la promesa funciona o no 
// Convertir los datos a json
    response.json().then(data => {
    
        imprimirTarjetas(data)
    })
    
})
.catch(error => {
    console.log(error)
})



}

getCharacters()
