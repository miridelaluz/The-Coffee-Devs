/* Comandos de instalacion paquetes/librerias en terminal
 nvm i express ejs dotenv @paypal/checkout-server-sdk
 nvp i --save-dev nodemon
 
 @express para montar el servidor
 @ejs librerias del lenguaje de programacion ejs
 @dotenv donde almacenaremos todas nuestras variables de entorno de paypal
 @ @paypal/checkout-server-sdk el codigo que utilizaremos en paypal
 @ "--save-dev nodemon" dependencia que actualiza los cambios*/


paypal
  .Buttons({
    createOrder: function () {
      return fetch("/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: 2,
            },
            { id: 2, quantity: 3 },
          ],
        }),
      })
        .then(res => {
          if (res.ok) return res.json()
          return res.json().then(json => Promise.reject(json))
        })
        .then(({ id }) => {
          return id
        })
        .catch(e => {
          console.error(e.error)
        })
    },
    onApprove: function (data, actions) {
      return actions.order.capture()
    },
  })
  .render("#paypal")