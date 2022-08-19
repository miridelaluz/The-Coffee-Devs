//Links de las categorias
const camisas = "/data/catalogo_camisas.json";
const tunicas = "/data/catalogo_tunicas.json";
const calzones = "/data/catalogo_calzones.json";
const calzas = "/data/catalogo_calzas.json";
const winingas = "/data/catalogo_winingas.json"

const tunicasEx = "/data/catalogo_tunicaEx.json";
const vestidos = "/data/catalogo_vestidos.json";
const sayon = "/data/catalogo_sayon.json";
const jubon = "/data/catalogo_jubon.json";
const kaftan = "/data/catalogo_kaftan.json"

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
                                    <strong>Precio: $ </strong><span class="price">${prenda.precio}</span><span> MXN</span>
                                </form>
                            </p>
                        </div>
                        <div class="pie card-footer">
                            <a href="" class="enlaces cars">Agregar al carrito</a>
                            <a>
                                <button class="icono"><img src="/assets/iconos/5172567_heart_like_love_icon.png" alt="" height="45px"> </button>
                            </a>
                        </div>
                    </div>`;
            contenedor.insertAdjacentHTML("afterbegin",div);
        }
        });
}

//Selecciona el id del HTML
const aCamisas = document.getElementById("camisas");
const aTunicas = document.getElementById("tunicaIn");
const aCalzones = document.getElementById("calzones");
const aCalzas = document.getElementById("calzas");
const aWiningas = document.getElementById("winingas");

const aTunicaEx = document.getElementById("tunicaEx");
const aVestidos = document.getElementById("vestidos");
const aSayon = document.getElementById("sayon");
const aJubon = document.getElementById("jubon");
const aKaftan = document.getElementById("kaftan");

//La funcion flecha evita que la funcion de mostrar datos se eejcute al cargar la pagina
aCamisas.addEventListener('click', () => {mostrarDatos(camisas)});
aTunicas.addEventListener('click', () => {mostrarDatos(tunicas)});
aCalzones.addEventListener('click', () => {mostrarDatos(calzones)});
aCalzas.addEventListener('click', () => {mostrarDatos(calzas)});
aWiningas.addEventListener('click', () => {mostrarDatos(winingas)});

aTunicaEx.addEventListener('click', () => {mostrarDatos(tunicasEx)});
aVestidos.addEventListener('click', () => {mostrarDatos(vestidos)});
aSayon.addEventListener('click', () => {mostrarDatos(sayon)});
aJubon.addEventListener('click', () => {mostrarDatos(jubon)});
aKaftan.addEventListener('click', () => {mostrarDatos(kaftan)});

<<<<<<< HEAD
//document.getElementById('camisas').addEventListener('click',console.log('hey'));
=======

>>>>>>> 69b0626bc557aa8dc934cd5d61cb76b2db46e795
