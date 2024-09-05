let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then((response) => {
        response.json().then((data)=>{
            console.log(data);
            createCards(data);
            

        }).catch((error)=> console.log("Problema con json", error))//regresa una nueva promesa json
    }).catch((err)=> console.log("Existió un problema con la solicitud", err));
}//getData
function createCards(products){
    console.log(products.length);

    products.forEach(prod =>{
        divData.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
  <img src="${prod.image}" class="card-img-top" alt="${prod.description}">
  <div class="card-body">
    <h5 class="card-title">${prod.name}</h5>
    <p class="card-text">${prod.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Precio: $${prod.price}</li>
    <li class="list-group-item"></li>
  </ul>

</div></br></br>`)
    })
    //crear una Card por cada producto con sus datos escenciales
    // de preferencia foreach: name, description, image, price
}//createCards
getData();