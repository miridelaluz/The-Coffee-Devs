
//Prueba de conexión
console.log("Prueba de conexión");

//Declarar variables con elementos identificados
const joyeria = Document.getElementByID("scrollJoyeria");
const talegas = Document.getElementByID("scrollTalegas");
const surrones = Document.getElementByID("scrollSurrones");
const sporrans = Document.getElementByID("scrollSporrans");
const cinturones = Document.getElementByID("scrollCinturones");
const bolsos = Document.getElementByID("scrollBolsos");
const sombreros = Document.getElementByID("scrollSombreros");
const bonetes = Document.getElementByID("scrollBonetes");
const capirotes = Document.getElementByID("scrollCapirotes");
const cofias = Document.getElementByID("scrollCofias");

function esconderElementos(){
    const click= true;
 if(joyeria == true){
    talegas.style.visibility = 'hidden';
 }
}