
const Clickbtn = document.querySelectorAll(".btn_lista_deseos")
const tfoot = document.querySelector('.tfoot')
let wishlist = []

Clickbtn.forEach(boton => {
    boton.addEventListener('click', addTowishlistItem)
  })

  function addTowishlistItem(e){
    const buttn = e.target
    const elemen = buttn.closest(".card_producto")
    const elemenTitle = elemen.querySelector(".titulo_producto").textContent;
    const elemenDesc = elemen.querySelector(".descripcion").textContent;
    const elemenPrice = elemen.querySelector(".price").textContent;
    const elemenImg = elemen.querySelector('.imagen_producto').src;
  
    const newelemen = {
        title: elemenTitle,
        desc: elemenDesc,
        precio: elemenPrice,
        img: elemenImg,
        cantidad: 1
}

addelemenwishlist(newelemen)
}


function addelemenwishlist(newelemen){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tfoot.getElementsByClassName('input__item')
  for(let i =0; i < wishlist.length ; i++){
    if(wishlist[i].title.trim() === newelemen.title.trim()){
      wishlist[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      wishlistTotal()
      return null;
    }
  }
  
  wishlist.push(newelemen)
  
  renderwishlist()
} 

function renderwishlist(){
    tfoot.innerHTML = ''
    wishlist.map(elemen => {
      const tr = document.createElement('tr')
      tr.classList.add('elemenwishlist')
      const Content = `
      
              <td class="table__imagen">
                <img style="width: 150px; height: 150px;" src=${elemen.img}  alt="">
                <h6 class="title">${elemen.title}</h6>
                </td>
            <td class="table__productos">
                <h6 class="title">${elemen.desc}</h6>
              </td>
              <td class="table__price"><p>${elemen.precio}</p></td>
              <td class="table__cantidad">
                <input class="input__item">
                <button class="delete btn btn-danger"><img src="/assets/iconos/5172567_heart_like_love_icon.png" alt="" height="30px"></button>
              </td>
      
      `
      tr.innerHTML = Content;
      tfoot.append(tr)
  
      tr.querySelector(".delete").addEventListener('click', removeItemwishlist)
      tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    wishlistTotal()
  }

    
  
  function removeItemwishlist(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".elemenwishlist")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<wishlist.length ; i++){
  
      if(wishlist[i].title.trim() === title.trim()){
        wishlist.splice(i, 1)
      }
    }

    const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  wishlistTotal()
}

  

const Clickbutton = document.querySelectorAll(".cars")
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
    btn.addEventListener('click', addToCarritoItem)
  })

  function addToCarritoItem(e){
    const button = e.target
    const item = button.closest(".card_producto")
    const itemTitle = item.querySelector(".titulo_producto").textContent;
    const itemPrice = item.querySelector(".price").textContent;
    const itemImg = item.querySelector('.imagen_producto').src;
  
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
}

addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 

function renderCarrito(){
    tbody.innerHTML = ''
    carrito.map(item => {
      const tr = document.createElement('tr')
      tr.classList.add('ItemCarrito')
      const Content = `
      
              <td class="table__productos">
                <img src=${item.img}  alt="">
                <h6 class="title">${item.title}</h6>
              </td>
              <td class="table__price"><p>${item.precio}</p></td>
              <td class="table__cantidad">
                <input type="number" min="1" value=${item.cantidad} class="input__elemento">
                <button class="delete btn btn-danger">x</button>
              </td>
      
      `
      tr.innerHTML = Content;
      tbody.append(tr)
  
      tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
      tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
    })
    CarritoTotal()
  }

  function CarritoTotal(){
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
      const precio = Number(item.precio.replace("$", ''))
      Total = Total + precio*item.cantidad
      localStorage.setItem("pago", Total)
      const pay = localStorage.getItem("pago")
    })
  

    itemCartTotal.innerHTML = `Total $${Total}`
    addLocalStorage()
  }
  
  function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    for(let i=0; i<carrito.length ; i++){
  
      if(carrito[i].title.trim() === title.trim()){
        carrito.splice(i, 1)
      }
    }

    const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
    const sumaInput  = e.target
    const tr = sumaInput.closest(".ItemCarrito")
    const title = tr.querySelector('.title').textContent;
    const img = tr.querySelector('.imagen_producto').textContent;
    carrito.forEach(item => {
      if(item.title.trim() === title){
        sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
        item.cantidad = sumaInput.value;
        CarritoTotal()
      }
    })
  }
  
  function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }
  
  window.onload = function(){
    const storage = JSON.parse(localStorage.getItem('carrito'));
    const stora = JSON.parse(localStorage.getItem('wishlist'));
    if(storage){
      carrito = storage;
      renderCarrito()
    }
    if(stora){
        wishlist = stora;
        renderwishlist()
  }

  
  }

  let totalAmount = localStorage.getItem("pago")



  paypal
  .Buttons({
      createOrder: function (data, actions){
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          value: totalAmount,
                      },
                  },
              ],
          })
      },
      onApprove: function(data, actions) {
          return actions.order.capture().then(function (details){
              alert("Gracias por comprar en Godiva Satreria Historica"+ details.payer.name.
              given_name)
          })
      },
  })
  .render("#paypal")
