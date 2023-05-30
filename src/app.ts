import express, { Application, Response } from 'express'
const app: Application = express()
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res: Response) => {
  res.send('Hello World!')
})

export default app
