import { request, response } from 'express'
import { dataGet1 } from '../types/typesServer'

const MensajeFunction = (_req = request, res = response): void => {
  const data = [2, 'hola, mundo', 5]
  const response: dataGet1 = {
    msg: 'express typescript',
    data
  }
  res.send(response)
}

export default MensajeFunction
