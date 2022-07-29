/* function previewImage(nb) {        
    var reader = new FileReader();         
    reader.readAsDataURL(document.getElementById('uploadImage'+nb).files[0]);         
    reader.onload = function (e) {             
        document.getElementById('uploadPreview'+nb).src = e.target.result;         
    };     
} */


function previ(nb) {        
    var leer = new FileReader();         
    leer.readAsDataURL(document.getElementById('cargar'+nb).files[0]);         
    leer.onload = function (e) {             
        document.getElementById('previ'+nb).src = e.target.result;         
    };     
}