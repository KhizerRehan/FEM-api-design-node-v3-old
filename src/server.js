import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import todoRouter from './resources/todo/todo.router'

export const app = express()

app.disable('x-powered-by')

// Middlewares:
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('Logging Middleware')
  next()
}

// Use this middleware for complete application:
app.use(log)

// =====================================

const router1 = express.Router()

router1.get('/route1', (req, res) => {
  res.send({
    path: '/static route1 here',
  })
})

router1.get('/route2', (req, res) => {
  res.send({
    path: '/static route2 here',
  })
})

// Mounting SubRoute to MainRouter of Application:
app.use('/static', router1)

const router2 = express.Router()

router2.get('/route1', (req, res) => {
  res.send({
    path: '/api route1 here',
  })
})

router2.get('/route2', (req, res) => {
  res.send({
    path: '/api route2 here',
  })
})

app.use('/api', router2)

// =====================================
// Lesson-2
// Registering Routes:

app.use('/api/todo', todoRouter)
// =====================================

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
