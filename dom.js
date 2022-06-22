const productos = [
    {
        nombre: "Carterita",
        precio: 15000,
        color: "Rojo",
        imagen: "./Img/carterita.jpg"
    },
    {
        nombre: "Cartera 1",
        precio: 10000,
        color: "Negro",
        imagen: "./Img/cartera 1.png"
    },
    {
        nombre: "Cartera 2",
        precio: 20000,
        color: "Azul",
        imagen: "./Img/cartera 2.png"
    }
]

// USANDO innerHTML
const contenedorProducto = document.getElementById("contenedorProducto")

console.log(contenedorProducto);

for(let p of productos){

    const cardProducto = document.createElement("div");

    cardProducto.classList.add("cardProducto")

    cardProducto.innerHTML += `
        <div class="producto__cont">
            <h2 class="producto__nombre">${p.nombre}</h2>
            <img class="producto__img" src="${p.imagen}" alt="">
            <h2 class="producto__precio">${p.precio}</h2>
        </div>
    `

    contenedorProducto.appendChild(cardProducto);
}






