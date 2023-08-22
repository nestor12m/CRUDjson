document.addEventListener("DOMContentLoaded",function(){
    
    mostarInformacion()
   
});


function crearImagenes(nombre, precio,imagen,id){
    const contenedorDiv = document.createElement("div");
    contenedorDiv.classList.add("contenedor_imagen")
 const  contenido = 
  `
  <img class="imagenes" src="${imagen}"" >
  <p class="productoxyz">${nombre}</p>
  <p>$ ${precio}</p>
  <a href="">Ver producto</a>
`

contenedorDiv.innerHTML = contenido;






return contenedorDiv;

}

async function mostarInformacion(){

  try {
    const body1 = document.querySelector(".seccion2_imagenes");

    const datos = await fetch("http://localhost:3000/productos");
    const resultado = await datos.json();
    
    // const { consolas } = resultado;
   
   

    resultado .forEach( (el) =>{
        
        const info = crearImagenes(el.nombre, el.precio, el.imagen,el.id);
        body1.appendChild(info);

    })



  } catch (error) {
     console.log(error)
  }
 
}
