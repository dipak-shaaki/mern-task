import { createPost, updateCategories } from "../services/postService.js";

const createPostHandler = async (req, res) => {
  try {
    const { title, content, categories = [] } = req.body;
    const post = await createPost({ title, content, categories });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { categories = [] } = req.body;
    await updateCategories(Number(req.params.id), categories);
    return res.json({ message: "Post categories updated" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update post" });
  }
};

export default { createPost: createPostHandler, updatePost };
