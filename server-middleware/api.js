import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(cors())

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

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

let notify = {}

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

app.post('/notifyURL', (req, res) => {
  notify = req.body
  console.log('req.body', req.body)
})
app.get('/notifyURL', (req, res) => {
  return res.json(notify)
})

module.exports = {
  path: 'api',
  handler: app,
}
