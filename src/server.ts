import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(`app listening on port ${config.port}`)
    })

    console.log('Database connection Success')
  } catch (err) {
    console.log('ERROR Connecting to db', err)
  }
}
boostrap()
