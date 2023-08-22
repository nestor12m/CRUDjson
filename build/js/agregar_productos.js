
leerFormulario();
function leerFormulario(){

    const formulario = document.querySelector(".btn_iniciar");

    formulario.addEventListener("click", function (e){
        e.preventDefault();

        const nombre = document.querySelector(".nombre").value;
        const precio = document.querySelector(".precio").value;
        const imagen = document.querySelector(".imagen").value;
        console.log(nombre,precio,imagen,);
        
      
        crearCliente(nombre,precio,imagen).then ( (respuesta =>{
            window.location.href ="/error.html";
        }))
        .catch((e) =>{
            console.log(e);
        })
    })
}





// crear cliente

function  crearCliente(nombre,precio,imagen){
    // se enviar url y prpiedades de la llamada
  
  return  fetch("http://localhost:3000/productos",{
       method :"POST",  // metodo 
       headers:{        // servidor depa que tipo de archivo va a recibir
        "content-Type":"application/json"
       },
       body:           // aqui va la info que se quiere enviar
          JSON.stringify({nombre,precio,imagen,id:uuid.v4()})   // se envia como texto con json.stringify
       
    });
  }
  





