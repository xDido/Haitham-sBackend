import { Router } from 'express';
import { BlogPostController } from '../controllers/BlogPostController.js';

const router = Router();

router.get('/', BlogPostController.getAllBlogPosts);
router.get('/:id', BlogPostController.getBlogPostById);
router.post('/', BlogPostController.createBlogPost);
router.put('/:id', BlogPostController.updateBlogPost);
router.delete('/:id', BlogPostController.deleteBlogPost);

export default router;
