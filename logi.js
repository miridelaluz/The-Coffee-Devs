function visualizar(nb) {        
    var leer = new FileReader();         
    leer.readAsDataURL(document.getElementById('imagenCargada'+nb).files[0]);         
    leer.onload = function (e) {             
        document.getElementById('visualizar'+nb).src = e.target.result;         
    };     
}


