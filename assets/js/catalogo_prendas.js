function tunicas() {
        fetch('/data/catalogo_tunicas.json')
        .then(responseJSON => {return responseJSON.json()})
        .then(prendas => {
            let contenedor = document.getElementById("contenedor_cards");
            contenedor.innerHTML = ``;
        for (let prenda of prendas.data) {
            // console.log(`El id de la prenda: ${prenda.id}, url: ${prenda.imagen}`);
           let div = `
           <div class="card ">
                <div>
                    <img src="${prenda.imagen}" alt="">
                </div>
                <div class="contenido">
                    <h3>${prenda.nombre_producto}</h3>
                    <p>
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
                    <a href="" class="enlaces">Ver mas</a>
                </div>
            </div>`;
            contenedor.insertAdjacentHTML("afterbegin",div);
        }
        });
    
    }