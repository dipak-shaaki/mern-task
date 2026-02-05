import express from 'express'
import mongoose from 'mongoose'
import taskRoutes from './routes/taskRoutes.js'

const app = express()

app.use(express.json())

app.use("api/tasks", taskRoutes)


export { app }