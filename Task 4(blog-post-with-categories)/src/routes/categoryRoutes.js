import express from "express";
import categoryController from "../controllers/categoryController.js";

const router = express.Router();

router.get("/:name/posts", categoryController.getPostsByCategory);
router.delete("/:id", categoryController.deleteCategory);

export default router;
