import 'dotenv/config'
import app from './src/app.js'
import connectDb from './src/config/database.js'

const PORT = process.env.PORT || 5000

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  })
})
