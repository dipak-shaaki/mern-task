import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { noteSchema } from "../schemas/note.schema.js";
import { create, getAll } from "../controllers/note.controller.js";

const router = Router();

router.use(auth); // PROTECTED ROUTES

router.post("/", validate(noteSchema), create);
router.get("/", getAll);

export default router;
