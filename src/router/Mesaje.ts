import { Router } from 'express'
import MensajeFunction from '../controllers/MensajeFunction'

const router = Router()

router.get('/', MensajeFunction)

export { router }
