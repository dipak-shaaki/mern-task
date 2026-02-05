import { createNote, getNotes } from "../services/note.service.js";

const create=async(req, res) => {
  const note = await createNote(req.user.id, req.body);
  res.status(201).json(note);
}

const getAll=async(req, res) => {
  const notes = await getNotes(req.user.id);
  res.json(notes);
}


export{
    create,
    getAll
}