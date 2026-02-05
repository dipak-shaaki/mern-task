import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/userRoutes.js'

dotenv.config();
const app = express();

//Routes
app.use('/users', routes)


app.get('/', (req, res) => {
    res.send("User API running!")
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})