import app from './src/app'

import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(5000,()=>
    console.log("server running on port")
)
})