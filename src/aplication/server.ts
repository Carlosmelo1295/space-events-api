import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyparse from 'body-parser'
import { makeLaunchController } from '../presentation/launch-controller'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(bodyparse.json())
app.use(cors())

const launchController = makeLaunchController()

app.get('/launch', async (request, response) => response.send(await launchController.load()))

const server = app.listen(3000, () => {
  console.log('App rodando.')
})

process.on("SIGINT", () => {
  server.close();
  console.log(`Fim do processo na porta ${3000} `);
});