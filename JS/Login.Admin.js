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





const nombre = document.getElementById('nombre');
const color = document.getElementById('color');
const material = document.getElementById('material');
const talla = document.getElementById('talla');
const precio = document.getElementById('precio');
const categoria = document.getElementById('categoria');
const subCategoria = document.getElementById('subCategoria');
const descripcion = document.getElementById('descripcion');
const contactForm = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');
  
const validate = (e) => {
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

submitBtn.addEventListener('click', validate);