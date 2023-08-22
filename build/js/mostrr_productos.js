

document.addEventListener("DOMContentLoaded",function(){
    
    mostarInformacion()
   
   
});


function crearImagenes(nombre, precio,imagen,id){
    const contenedorDiv = document.createElement("div");
    contenedorDiv.classList.add("contenedor_imagen")
 const  contenido = 


`
<img class="imagenes" src="${imagen}"">
<img class="borrar"  src="/build/img/elimnar.svg" alt="" id="${id}">
<a href="/editar_producto.html?id=${id}"><img class="editar"src="/build/img/edit.svg" alt=""></a>
<p class="productoxyz">${nombre}</p>
<p>$ ${precio}</p>
<a href="">Ver producto</a>
`

contenedorDiv.innerHTML = contenido;

// borrar elemnto
const botonBorrar = contenedorDiv.querySelector(".borrar")

botonBorrar.addEventListener("click", (e) =>{
  e.preventDefault();
  const id = botonBorrar.id;
  elminarDatosBk(id);
  console.log("el dando click" + id)
})

// generar id
// contenedorDiv.onclick = selecciorElemento;
// contenedorDiv.dataset.idservice = id;



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


// function selecciorElemento(evento){
//    // para seleccionar un elemento a trabez de un id que esta antes
//    let elemento;
// if(evento.target.tagName === ("P") || evento.target.tagName === ("IMG")){
//   elemento = evento.target.parentElement;
// //  console.log(elemento.dataset.idservice)
 
// }
// else{
//    //seleciona ese elemento
//    elemento = evento.target
//   //  console.log(elemento.dataset.idservice)
// }
// // poner y quitar clases de un elemento si la tiene o no

// if (elemento.classList.contains("seleccionado")){
//   elemento.classList.remove("seleccionado")
//  }else{
//   elemento.classList.add("seleccionado")
//  }

// } 



// eliminar cliente

function elminarDatosBk(id){
  console.log("eliminando a----" + id)
  return fetch(`http://localhost:3000/productos/${id}` ,{
      method:"DELETE"
  })
}



