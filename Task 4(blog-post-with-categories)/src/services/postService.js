import { prisma } from "../config/database.js";

const createPost = async ({ title, content, categories }) => {

  return prisma.$transaction(async (tx) => {
    const post = await tx.post.create({
      data: {
        title,
        content,
        categories: {
          connect: categories.map((id) => ({ id }))
        }
      }
    });
    return post;
  });
};

const updateCategories = async (postId, categories) => {
  return prisma.$transaction(async (tx) => {
    await tx.postCategory.deleteMany({ where: { postId } });

    for (const name of categories) {
      const category = await tx.category.upsert({
        where: { name },
        update: {},
        create: { name }
      });

      await tx.postCategory.create({
        data: { postId, categoryId: category.id }
      });
    }
  });
};
export { createPost, updateCategories };
