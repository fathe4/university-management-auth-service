import express, { Application, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRoute from './app/modules/users/users.route'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// APPlication routes
app.use('/api/v1/users/', usersRoute)

app.get('/', async (req, res: Response) => {
  res.send('Hello World!')
})

export default app
