import express from 'express';
import { getProduct,createProduct } from '../controller/productController.js';
const router = express.Router();

router.post('/',createProduct)
router.get('/',getProduct)


export default router;