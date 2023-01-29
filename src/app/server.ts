import express from 'express'
import { LaunchController } from '../controllers/launch-controller'

const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/launch', (req, res) => {
  const launchController = new LaunchController()
  res.send({response: launchController.load()})
})

app.listen(3000, () => {
  console.log('App rodando.')
})