//Links de las categorias
const camisas = "/data/catalogo_camisas.json";
const tunicas = "/data/catalogo_tunicas.json";
const calzones = "/data/catalogo_calzones.json";
const calzas = "/data/catalogo_calzas.json";
const winingas = "/data/catalogo_winingas.json"
const llave = "datosProductos";

 function mostrarDatos(categoria) {
    fetch(categoria)
        .then ( (responseJSON) => { return responseJSON.json()})
        .then(prendas => {
        let contenedor = document.getElementById("contenedor_cards");
        contenedor.innerHTML = ``;   
        for (let prenda of prendas.data) {
            let div = `
                    <div class="card_producto card h-100"> <!--card_producto 1-->
                        <img class="imagen_producto" src="${prenda.imagen}" alt="...">
                        <div class="contenido card-body">
                            <h3 class="titulo_producto">${prenda.nombre}</h3>
                            <h5 class="descripcion">${prenda.descripcion}</h5>
                            <p class="contenido_producto">
                                <form>
                                    <label><strong>Talla: </strong></label> 
                                    <select name="tallas">
                                        <option>${prenda.tallas[0]}</option>
                                        <option>${prenda.tallas[1]}</option>
                                        <option>${prenda.tallas[2]}</option>
                                        <option>${prenda.tallas[3]}</option>
                                    </select> <br>
                                    <label><strong>Color: </strong></label>
                                    <select name="color">
                                        <option>${prenda.color[0]}</option>
                                        <option>${prenda.color[1]}</option>
                                        <option>${prenda.color[2]}</option>
                                    </select> <br>
                                    <strong>Material: </strong> ${prenda.material}<br>
                                    <strong>Precio: </strong> $ ${prenda.precio} MXN<br>
                                </form>
                            </p>
                        </div>
                        <div class="pie card-footer">
                            <a href="" class="enlaces">Agregar al carrito</a>
                            <a>
                                <button class="icono"><img src="/assets/iconos/5172567_heart_like_love_icon.png" alt="" height="45px"> </button>
                            </a>
                        </div>
                    </div>`;
            contenedor.insertAdjacentHTML("afterbegin",div);
        }
        });

        console.log('hey');
}
//Selecciona
const aCamisas = document.getElementById("camisas");
const aTunicas = document.getElementById("tunicaIn");
const aCalzones = document.getElementById("calzones");
const aCalzas = document.getElementById("calzas");
const aWiningas = document.getElementById("winingas");

//La funcion flecha evita que la funcion de mostrar datos se eejcute al cargar la pagina
aCamisas.addEventListener('click', () => {mostrarDatos(camisas)});//mostrarDatos(camisas));
aTunicas.addEventListener('click', () => {mostrarDatos(tunicas)});
aCalzones.addEventListener('click', () => {mostrarDatos(calzones)});
aCalzas.addEventListener('click', () => {mostrarDatos(calzas)});
aWiningas.addEventListener('click', () => {mostrarDatos(winingas)});


//document.getElementById('camisas').addEventListener('click',console.log('hey'));
