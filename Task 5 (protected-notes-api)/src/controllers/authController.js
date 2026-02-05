import { registerUser,loginUser } from "../service/authService";


const register=async(req,res)=>{
    const user = await registerUser(req.body.email,req.body.password);
    res.status(201).json(user)
}

const login=async(req,res)=>{
    const token = await loginUser(req.body.email,req.body.password);
    res.json({token})
}

export{
    register,
    login
}