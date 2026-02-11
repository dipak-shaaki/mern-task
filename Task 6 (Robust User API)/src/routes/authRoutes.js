import {Router} from 'express'
import { register,login } from "../controller/authController.js";
import validate from "../middleware/validateMiddleware.js";
import {registerSchema} from "../schemas/authSchema.js"

const router=Router();

// Registration route with validation middleware
router.post('/register',validate(registerSchema),register);
router.post('/login',login);

export default router;