import {Request,Response, Router, NextFunction} from "express";
import { User } from "../models/User";
const router=Router()

router.get('/user', (req:Request,res:Response,next:NextFunction)=>{
    User.findAll()
    .then((users)=>{res.send(users)})
    .catch((error)=>next(error))
    // res.send('get User')

})

router.post('/user', (req:Request,res:Response,next:NextFunction)=>{
    const user=req.body;
    User.create(user)
    .then((createdUser)=>{
        res.send(createdUser)
    })
    .catch((err)=>next(err))
    // res.send('post User')
})

export default router
