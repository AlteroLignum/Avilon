import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    shortDescription:{
        type:String
    },
    price:{
        type:Number
    },
    imageUrl: String,
    productType: String,
    designer: String,
})
export default mongoose.model('Card',CardSchema)