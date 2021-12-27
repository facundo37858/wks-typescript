import {Request,Response, Router, NextFunction} from "express";
import { Product } from "../models/Product";
const router=Router()


router.get('/products',(req:Request,res:Response,next:NextFunction)=>{
    Product.findAll()
    .then((products)=>res.send(products))
    .catch((err)=>next(err))
    // res.send('get products')
})

router.post('/products',(req:Request,res:Response,next:NextFunction)=>{
    const product=req.body
    Product.create(product)
    .then((createdProduct)=>res.send(createdProduct))
    .catch((err)=>next(err))
    // res.send('post products')
})
export default router