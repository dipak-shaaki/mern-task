import prisma from "../config/prisma.js";

const createNote = (userId, data) => {
  return prisma.note.create({
    data: { ...data, userId }
  });
}

const getNotes = (userId) => {
  return prisma.note.findMany({ where: { userId } });
}
export{
    createNote,
    getNotes
}