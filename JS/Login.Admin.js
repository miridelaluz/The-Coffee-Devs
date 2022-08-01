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