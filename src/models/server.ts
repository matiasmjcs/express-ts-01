import express, { Application } from 'express'
import { router } from '../router/Mesaje'

export default class Server {
  app: Application
  constructor () {
    this.app = express()
    this.middleware()
    this.router()
  }

  middleware (): void {
    this.app.use(express.json())
  }

  router (): void {
    this.app.use('/api/v1', router)
  }

  listen (): void {
    this.app.listen(3000, () => {
      console.log('server is running')
    })
  }
}
