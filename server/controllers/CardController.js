import  mongoose from "mongoose"
import CardModel from "../models/CardModel.js"

export const getAllCollection = async(req,res) =>{
    try{ 
        const card = await CardModel.find().exec()
        res.json(card)
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Cards can not to load'
    })
    }
}
export const getCollection = async(req,res) =>{
    try{
        const doc = new CardModel({
            title: req.body.title,
            description:req.body.description,
            shortDescription:req.body.shortDescription,
            price: req.body.price,
            imageUrl:req.body.imageUrl,
            productType:req.body.productType,
            designer:req.body.designer
        })

        const card = await doc.save()
        res.json({
            card
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Cards can not to load'
    }) 
    }
}
export const getOne = async(req,res) =>{
    const postId = req.params.id
    try{
        const card = await CardModel.findById(postId)
        if(card){
            res.json(card)
            
        }else{ 
            res.status(404).json({message:'Card not found'})
        }
    }catch(e){
        console.log(e)
        res.status(500).json({message:'Error retreieving card'})
    }
}