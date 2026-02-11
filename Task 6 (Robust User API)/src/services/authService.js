import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import ApiError from '../utils/apiError.js';

const registerUser=async(email,password)=>{
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(400, 'Email already in use');
    }
    // Hash the password   
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return { message: 'User registered successfully' };
}

const loginUser=async(email,password)=>{
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(400, 'Invalid email or password');
    }
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError(400, 'Invalid email or password');
    }   
    return {user, message: 'Login successful' };
}

export{
    registerUser,
    loginUser
}