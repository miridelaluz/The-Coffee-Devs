/* function previewImage(nb) {        
    var reader = new FileReader();         
    reader.readAsDataURL(document.getElementById('uploadImage'+nb).files[0]);         
    reader.onload = function (e) {             
        document.getElementById('uploadPreview'+nb).src = e.target.result;         
    };     
}  */


 /* function previ(nb) {        
    var leer = new FileReader();         
    leer.readAsDataURL(document.getElementById('cargar'+nb).files[0]);         
    leer.onload = function (e) {             
        document.getElementById('previ'+nb).src = e.target.result;         
    };     
} */


/* function captura(){
    var nombreest = document.getElementById("nomest").value;
    console.log(nombreest);
    var celuest = document.getElementById("celuest").value;
    if(nombreest=""){
        alert("Falta el nombre");
        document.getElementById("nomest").focus();
    }else{
        if(celuest==""){
            alert("Falta el cel");
            document.getElementById("celuest").focus();
        }
    }else{
        console.log(nombreest +" "+celuest);
        document.getElementById("nomest").value="";
        document.getElementById("celuest").value="";
        document.getElementById(nomest).focus();

    }
    
} */





function archivo(evt) {
      var files = evt.target.files; // FileList object
       
        //Obtenemos la imagen del campo "file". 
      for (var i = 0, f; f = files[i]; i++) {         
           //Solo admitimos imágenes.
           if (!f.type.match('image.*')) {
                continue;
           }
       
           var reader = new FileReader();
           
           reader.onload = (function(theFile) {
               return function(e) {
               // Creamos la imagen.
                      document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
               };
           })(f);
 
           reader.readAsDataURL(f);
       }
}
             
      document.getElementById('files').addEventListener('change', archivo, false);


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()







const nombre = document.getElementById("nombre");
const color = document.getElementById("color");
const material = document.getElementById("material");
const talla = document.getElementById("talla");
const precio = document.getElementById("precio");
const categoria = document.getElementById("categoria");
const subCategoria = document.getElementById("subCategoria");
const descripcion = document.getElementById("descripcion");

const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings=""
  let entrar = false

 
  if(nombre.value.length <2){
      warnings += 'El nombre no es valido <br>'
      entrar = true
  }
/*   if(precio != ){
      warnings += 'el email no es valido <br>'
      entrar = true
    }
    if(pass.value.length < 8){
      warnings += 'Contraseña no es valido <br>'
      entrar = true
    } */

    if(entrar){
        parrafo.innerHTML= warnings
    }
    else{
      parrafo.innerHTML = "Enviado"
      parrafo.innerHTML = ""
    }

})





/* const validate = (e) => {
  e.preventDefault();
 
  if (nombre.value = "") {
    errorElement.innerHTML = 'faltan';
    return false;
  } else{
    successMsg.innerHTML = 'Articulo cargado correctamente.'; 

  }
  
  

  

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate); */


const crear = "/data/catalogo_locrear.json";
const actualizar = "/data/catalogo_loactualizar.json";
const eliminar = "/data/catalogo_loeliminar.json";
const buscar = "/data/catalogo_lobuscar.json";



function mostrarDatos(categoria) {
  fetch(categoria)
      .then ( (responseJSON) => { return responseJSON.json()})
      .then(accesorios => {
      let contenedor = document.getElementById("contenedor_cards");
      contenedor.innerHTML = ``;   
      for (let accesorio of accesorios.data) {
         let div = `

                          <h3 class="titulo_producto">${accesorio.nombre}</h3>
                        
         `;
          contenedor.insertAdjacentHTML("afterbegin",div);
      }
      });
      console.log('hey');console.log('hey');
}





const aCrear = document.getElementById("crearlo");
const aActualizar = document.getElementById("actualizarlo");
const aEliminar = document.getElementById("eliminarlo");
const aBuscar = document.getElementById("buscarlo");


aCrear.addEventListener('click', () => {mostrarDatos(crear)});
aActualizar.addEventListener('click', () => {mostrarDatos(actualizar)});
aEliminar.addEventListener('click', () => {mostrarDatos(eliminar)});
aBuscar.addEventListener('click', () => {mostrarDatos(buscar)});