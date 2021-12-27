import { Router } from "express";
import userRouter from "./user";
import productRouter from './products'
const router=Router()

router.use('/user',userRouter)
router.use('/products',productRouter)

export default router