
const articulos = ["joyeria","talegas","zurrones", "sporrans","cinturones","bolsos","sombreros",
"bonetes","capirotes","cofias"];

function filtrar () {
    const formulario = document.querySelector('#barraBuscar');
    const boton = document.querySelector('#botonBuscar');
    console.log(formulario.value);

    for(const i=0; i<articulos.length; i++){

        if(formulario.value.toLowerCase() == articulos[i] ){
            
        }
    }
    
}
