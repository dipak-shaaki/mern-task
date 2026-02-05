import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/jwt.js';
import { registerSchema } from '../schemas/auth.schema.js'; // Add this

const registerUser = async (email, password) => {

    registerSchema.parse({ email, password });
    
    const hashed = await bcrypt.hash(password, 10);
    return prisma.user.create({
        data: {
            email,
            password: hashed
        }
    });
};

const loginUser = async (email, password) => {
    const user = await prisma.user.findUnique({ 
        where: { email } 
    });
    
    if (!user) {
        throw new Error("Invalid credentials");
    }
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    return jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
};


export {
    registerUser,
    loginUser
};
