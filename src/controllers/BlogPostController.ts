import { Request, Response } from 'express';
import { BlogPostService } from '../services/BlogPostService.js';

export class BlogPostController {
  static async getAllBlogPosts(req: Request, res: Response): Promise<void> {
    try {
      const posts = await BlogPostService.getAllBlogPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blog posts', error });
    }
  }

  static async getBlogPostById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const post = await BlogPostService.getBlogPostById(id);
      if (!post) {
        res.status(404).json({ message: 'Blog post not found' });
        return;
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching blog post', error });
    }
  }

  static async createBlogPost(req: Request, res: Response): Promise<void> {
    try {
      const newPost = await BlogPostService.createBlogPost(req.body);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: 'Error creating blog post', error });
    }
  }

  static async updateBlogPost(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updatedPost = await BlogPostService.updateBlogPost(id, req.body);
      if (!updatedPost) {
        res.status(404).json({ message: 'Blog post not found' });
        return;
      }
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ message: 'Error updating blog post', error });
    }
  }

  static async deleteBlogPost(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedPost = await BlogPostService.deleteBlogPost(id);
      if (!deletedPost) {
        res.status(404).json({ message: 'Blog post not found' });
        return;
      }
      res.status(200).json({ message: 'Blog post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting blog post', error });
    }
  }
}
