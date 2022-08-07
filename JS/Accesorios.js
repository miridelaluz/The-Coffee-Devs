
//Prueba de conexión
console.log('Prueba de conexión');
const articulo = 0;

//Declarar variables con elementos Identificados
// const joyeria = document.getElementById('joyeria');
// const talegas = document.getElementById('talegas');
// const zurrones = document.getElementById('zurrones');
// const sporrans = document.getElementById('sporrans');
// const cinturones = document.getElementById('cinturones');
// const bolsos = document.getElementById('bolsos');
// const sombreros = document.getElementById('sombreros');
// const bonetes = document.getElementById('bonetes');
// const capirotes = document.getElementById('capirotes');
// const cofias = document.getElementById('cofias');

function esconcerElementos(){

}

// function guardarDatos(){
//    const formulario = document.getElementById('fa1');
//    console.log("talla: " + formulario.elements['talla'].value);
//    console.log("color: " + formulario.elements['color'].value);
//    //Se le indica una clave y un valor
//    localStorage.setItem("Cohorte",14);
//    localStorage.setItem("nombre", formulario.elements['talla'].value);
//    localStorage.setItem("apellido", formulario.elements['color'].value);
//    localStorage.setItem("datos", JSON.stringify(
//     {
//        talla: formulario.elements['talla'].options,
//        color:formulario.elements['color'].text
//        //expiracion: tiempo_en_milisegundos; //1 minutos de tiempo de expiración
//     })
//    );
// }

function agregarCarrito(){
   guardarDatos();
}

function guardarDatos(){
const datos = {
   "num:": n,
   "articulo" : formulario.elements['card-title'],
   "talla: " : formulario.elements['seltalla'],
   "Precio: " : formulario.elements['precio']
}

console.log(datos);
}
//Para agregar al carrito los elementos
// function agregarCarrito() {
// guardarDatos();
//    const $seltalla = document.querySelector("#seltalla");
//    const $selcolor = document.querySelector("#selcolor");

   // const talla = () => {
   //    const indice = $seltalla.selectedIndex;
   //    if (indice === -1) return; // Esto es cuando no hay elementos
   //    const opciontalla = $seltalla.options[indice];
   //    alert(`Texto: ${opcionSeleccionada.text}. Valor: ${opcionSeleccionada.value}`);
   // };
   // const titulo = caract.eleme
   // const descr = document.getElementsByClassName('card-text');
   // const precio = document.getElementsByClassName('precio');
   // const image = document.getElementsByClassName('card-img-top');

  
   //console.log(opciontalla);
   const n = 1;
   // alert("Agregado al carrito" + talla + " " + color);
   // console.log(titulo);
// }
