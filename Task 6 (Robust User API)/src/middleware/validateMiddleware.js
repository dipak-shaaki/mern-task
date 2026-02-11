const validate = (schema)=>{

    return (req,res,next)=>{
        try{
            schema.parse(req.body);
            next();
        }
        catch(error){
            res.status(400).json({message:"Validation error",error:error.errors});
        }
    }
}


export default validate;