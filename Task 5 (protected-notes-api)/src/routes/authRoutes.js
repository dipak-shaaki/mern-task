import { Router } from "express";
import {register,login} from "../controllers/authController.js";
import validate from "../middlewares/validateMiddleware.js";
import{registerSchema} from "../schema/authSchema.js";

const router= Router();

router.post('/register',validate(registerSchema),register);
router.post('/login',validate(registerSchema),login);

export default router;
