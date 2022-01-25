import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(urlencodedParser)
app.use(jsonParser)

let count = 0
const orders = [
  {
    orderId: Date.now(), // timestamp
    booking: [],
    room: [],
    totalPrice: 0,
  },
]

// 確認 api 是否建立成功
app.get('/', (req, res) => {
  // res.redirect('https://www.google.com')

  res.json({
    message: 'Hello World',
    count,
  })
  count += 1
})

app.post('/orders', (req, res) => {
  const body = req.body

  const order = {
    orderId: Date.now(), // timestamp
    ...body,
  }

  orders.push(order)
  res.json(order)
})

app.get('/orders', (req, res) => {
  return res.json(orders)
})
app.get('/orders/:orderId', (req, res) => {
  const { orderId } = req.params
  const order = orders.find((o) => o.orderId === Number(orderId))
  return res.json(order)
})

module.exports = {
  path: 'api',
  handler: app,
}
