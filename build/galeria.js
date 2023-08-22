

document.addEventListener("DOMContentLoaded",function(){
    
    impimirDatos()
   
});


function crearImagenes(nombre, precio,imagen){
    const contenedorDiv = document.createElement("div");

 const  contenido = 
  ` <div class="contenedor_imagen">
  <img class="imagenes" src="${imagen}"">
  <p class="productoxyz">${nombre}</p>
  <p>${precio}</p>
  <a href="">Ver producto</a>
</div>`

contenedorDiv.innerHTML = contenido;
return contenedorDiv;

}


// body.appendChild(crearImagenes());


function impimirDatos(){ 
    //  se selecciona el elemento del dom donde va ir los datos
    const body1 = document.querySelector(".seccion3_imagenes");

   function  extraerDatos(){

    
    return fetch("http://localhost:3000/Productos").then((respuesta) =>{
      return  respuesta.json();
    })
    
        

   }

   extraerDatos()
   .then((data) =>{
        
    const { consolas } = data;

   
       data.forEach((el) => {
           const linedom = crearImagenes(el.nombre,el.precio, el.imagen);
           body1.appendChild(linedom);
        });
   })
}





