import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

// Middlewares:
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// GET DATA:
app.get('/', (req, res) => {
  console.log('Dashboard')
  res.send({
    message: 'Hello Dashboard',
  })
})

// POST DATA:
app.post('/', (req, res) => {
  console.log('Incoming Post Data', req.body)
  res.send({
    message: 'ok',
    status: 201,
  })
})

app.get('/data', (req, res) => {
  res.send({
    message: '/data route is targeted',
  })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({
    message: 'ok',
    status: 201,
  })
})

export const start = async () => {
  try {
    app.listen(4000, () => {
      console.log('Server is Listening in Port 4000')
    })
  } catch (error) {
    console.error(error)
  }
}
