import cors from 'cors'
import mongoose from 'mongoose'
import express from 'express'
 
import * as CardController from './controllers/CardController.js'


const app = express()
app.use(express.json())
app.use(cors())

const PORT = 5000

mongoose.connect('mongodb+srv://admin:wwwwww@avilon.doqqpmx.mongodb.net/?retryWrites=true&w=majority&appName=Avilon"')
.then(() => console.log('success'))
.catch((err) => console.log(err))
    

app.get('/collection',CardController.getAllCollection)
 
app.get('/collection/create',CardController.getCollection)

app.get('/collection/:id',CardController.getOne)

app.listen(PORT,(err) =>{
    if(err){ 
        return console.log(err)
    }
    console.log(`server start at port ${PORT}`)
})





