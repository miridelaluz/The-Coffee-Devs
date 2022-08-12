require("dotenv").config()

const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.use(express.static("JS"))
app.use(express.static("assets"))
app.use(express.static("html"))
app.use(express.static("CSS"))
app.use(express.json())

const paypal = require("@paypal/checkout-server-sdk")
const Environment =
  process.env.NODE_ENV === "production" ? paypal.core.LiveEnvironment : paypal.core.SandboxEnvironment
const paypalClient = new paypal.core.PayPalHttpClient(
  new Environment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET)
)
/* Simulacion de archivos en carrilo de compra */
const godivaItems = new Map([
  [1, { price: 30, name: "Bonete" }],
  [2, { price: 40, name: "Zurron" }],
])

app.get("/", (req, res) => {
  res.render("test", {      /*  nombre del archivo*/
    paypalClientId: process.env.PAYPAL_CLIENT_ID,
  })
})

app.post("/create-order", async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest()
  const total = req.body.items.reduce((sum, item) => {
    return sum + godivaItems.get(item.id).price * item.quantity
  }, 0)
  request.prefer("return=representation")
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: total,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: total,
            },
          },
        },
        items: req.body.items.map(item => {
          const godivaItem = godivaItems.get(item.id)
          return {
            name: godivaItem.name,
            unit_amount: {
              currency_code: "USD",
              value: godivaItem.price,
            },
            quantity: item.quantity,
          }
        }),
      },
    ],
  })

  try {
    const order = await paypalClient.execute(request)
    res.json({ id: order.result.id })
  } 
  catch (e) {
    res.status(500).json({ error: e.message })
  }
})

app.listen(3000) /* Puerto usado para montar servidor local */