// editar cliente

obtenerInformacion();

const formulario  = document.querySelector(".fomulario_editar")

function obtenerInformacion(){
    // obener el id por paramentro de url
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);

    if(id === null){
   console.log("hacer redirecion")
    }

    const imagen = document.querySelector(".imagen");
    const nombre = document.querySelector(".nombre");
    const precio = document.querySelector(".precio");
    
    detalleProducto(id).then((datos) => {
       
        imagen.value = datos.imagen;
        nombre.value = datos.nombre;
        precio.value = datos.precio;

       
       });
    }


  // realizar conexion con .json
  
  function detalleProducto(id){
    return fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) =>
        respuesta.json()
        
    )
  }
 
// obtener datos del formulario

  formulario.addEventListener("click", (e) =>{
    e.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector(".imagen").value;
    const nombre = document.querySelector(".nombre").value;
    const precio = document.querySelector(".precio").value;

    console.log(precio,nombre,imagen)
    // enviar datos como parametros
    actualizarCliente(id,imagen,nombre,precio)

  })

  // crear conexion de editar
  function actualizarCliente(id,imagen,nombre,precio){
    return fetch(`http://localhost:3000/productos/${id}`,{
        method:"PUT",
        headers:{
            "content-Type":"application/json"
          },
          body: JSON.stringify({id,imagen,nombre,precio})
        })
        .then ( (respuesta) =>{
            respuesta   
          })
          .catch( (error) =>{
            console.log(error)
          })
  }