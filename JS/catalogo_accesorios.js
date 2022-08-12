//Links de las categorias
const joyeria = "/data/catalogo_joyeria.json";
const talegas = "/data/catalogo_talegas.json";
const zurrones = "/data/catalogo_zurrones.json";
const sporrans = "/data/catalogo_sporrans.json";
const cinturones = "/data/catalogo_cinturones.json"
const bolsos = "/data/catalogo_bolsos.json";
const sombreros = "/data/catalogo_sombreros.json";
const bonetes = "/data/catalogo_bonetes.json";
const capirotes = "/data/catalogo_capirotes.json";
const cofias = "/data/catalogo_cofias.json";

const llave = "datosProductos";

/* function mostrarDatos(e) {
    e.preventDefault
    console.log(e.target.parentElement.classList.contains('categorias'));}
 */
 function mostrarDatos(categoria) {
    fetch(categoria)
        .then ( (responseJSON) => { return responseJSON.json()})
        .then(prendas => {
        let contenedor = document.getElementById("contenedor_cards");
        contenedor.innerHTML = ``;   
        for (let prenda of prendas.data) {
           let div = `
           <div class="card_producto">
                <div>
                    <img class="imagen_producto" src="${prenda.imagen}" alt="">
                </div>
                <div class="contenido">
                    <h3 class="titulo_producto">${prenda.nombre_producto}</h3>
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
                    <strong>Material: </strong> ${prenda.material[0]} Lino<br>
                    <strong>Precio: </strong> $ ${prenda.precio} MXN<br>
                </form>
                    </p>
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

//Las variables para los enlaces 
const aCamisas = document.getElementById("camisas");
const aTunicas = document.getElementById("tunicaIn");
const aCalzones = document.getElementById("calzones");
const aCalzas = document.getElementById("calzas");
const aWiningas = document.getElementById("winingas");

aCamisas.addEventListener('click', () => {mostrarDatos(camisas)});//mostrarDatos(camisas));
aTunicas.addEventListener('click', () => {mostrarDatos(tunicas)});
aCalzones.addEventListener('click', () => {mostrarDatos(calzones)});
aCalzas.addEventListener('click', () => {mostrarDatos(calzas)});
aWiningas.addEventListener('click', () => {mostrarDatos(winingas)});


//document.getElementById('camisas').addEventListener('click',console.log('hey'));