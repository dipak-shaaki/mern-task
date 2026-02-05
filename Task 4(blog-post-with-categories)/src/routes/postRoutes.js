import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.post("/", postController.createPost);
router.put("/:id/categories", postController.updatePost);

export default router;
