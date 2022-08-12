//Links de las páginas
const calzadoPag1 = "/data/catalogo_calzado_pag1.json";
const calzadoPag2 = "/data/catalogo_calzado_pag2.json";
const llave = "datosProductos";   

/* function mostrarDatos(e) {
    e.preventDefault
    console.log(e.target.parentElement.classList.contains('pagina'));}
 */
 function mostrarDatos(categoria) {
    fetch(categoria)
        .then ( (responseJSON) => { return responseJSON.json()})
        .then(calzados => {
        let contenedor = document.getElementById("contenedor_cards");
        contenedor.innerHTML = ``;   
        for (let calzado of calzados.data) {
           let div = `
           <div class="col-lg-3 col-md-6 col-sm-12 card_producto">
      <div class="card h-100">
          <img src="${calzado.imagen}" class="img-fluid imagen_producto" alt="...">
          <div class="card-body contenido">
              <h3 class="titulo_producto">${calzado.nombre_producto}</h3>
              <h5 class="descripcion">${calzado.descripcion}</h5>
              <p class=" contenido_producto card-text card.descripcion articulo_lasquenete_texto">
              <form>
                  <label><strong>Talla: </strong></label>
                  <select class="elegir" name="tallas">
                      <option>${calzado.tallas[0]}</option>
                      <option>${calzado.tallas[1]}</option>
                      <option>${calzado.tallas[2]}</option>
                      <option>${calzado.tallas[3]}</option>
                      <option>${calzado.tallas[4]}</option>
                      <option>${calzado.tallas[5]}</option>
                      <option>${calzado.tallas[6]}</option>
                      <option>${calzado.tallas[7]}</option>
                  </select><br>
              </form>
              <label><strong>Color: </strong></label>
              <select class="elegir" name="colores">
                  <option>${calzado.color[0]}</option>
                  <option>${calzado.color[1]}</option>
                  <option>${calzado.color[2]}</option>
              </select><br>
              <strong>Material: </strong>${calzado.material[0]}<br>
              <strong>Precio: </strong>$ ${calzado.precio} MXN
              </form>
              </p>
          </div>
          <div class="card-footer">
              <a href="" class="enlaces">Agregar al carrito</a>
              <a>
                  <button class="btn btn_lista_deseos">
                      <a href="#">
                          <img src="/assets/iconos/5172567_heart_like_love_icon.png" alt=""
                              height="30px">
                      </a>
                  </button>
          </div>
      </div>
  </div>`;
            contenedor.insertAdjacentHTML("afterbegin",div);
        }
        });
        console.log('funciona');
}

//Las variables para los enlaces 
const pag1 = document.getElementById("Pag1");
const pag2 = document.getElementById("Pag2");


pag1.addEventListener('click', () => {mostrarDatos(calzadoPag1)});//mostrarDatos(calzado));
pag2.addEventListener('click', () => {mostrarDatos(calzadoPag2)});//mostrarDatos(calzado));



