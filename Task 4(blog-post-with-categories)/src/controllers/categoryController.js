import { prisma } from "../config/database.js";

const deleteCategory = async (req, res) => {
  try {
    await prisma.category.delete({
      where: { id: Number(req.params.id) }
    });
    return res.json({ message: "Category deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete category" });
  }
};

const getPostsByCategory = async (req, res) => {
  try {
    const category = await prisma.category.findUnique({
      where: { name: req.params.name },
      include: {
        posts: { include: { post: true } }
      }
    });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.json(category.posts.map((p) => p.post));
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch category posts" });
  }
};

export default { deleteCategory, getPostsByCategory };
