import prisma from '../config/prisma.js';

//create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.create({
      data: { name, email, password }
    });
    res.status(200).json(user);

  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

//get all users 
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
};


export { createUser, getAllUsers };
