import Product from '../models/product.js'

//Create Product

export const createProduct =async (req,res)=>{
   try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export const getProduct=async (req,res)=>{
    const products =await Product.find();
    res.json(products);
}

