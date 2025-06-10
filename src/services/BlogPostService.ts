import { BlogPostModel, IBlogPost } from '../models/BlogPost.js';

export class BlogPostService {
  // Get all blog posts
  static async getAllBlogPosts(): Promise<IBlogPost[]> {
    return BlogPostModel.find();
  }

  // Get a single blog post by ID
  static async getBlogPostById(id: string): Promise<IBlogPost | null> {
    return BlogPostModel.findById(id);
  }

  // Create a new blog post
  static async createBlogPost(postData: Partial<IBlogPost>): Promise<IBlogPost> {
    const newPost = new BlogPostModel(postData);
    return newPost.save();
  }

  // Update an existing blog post
  static async updateBlogPost(
    id: string,
    updatedData: Partial<IBlogPost>
  ): Promise<IBlogPost | null> {
    return BlogPostModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  // Delete a blog post by ID
  static async deleteBlogPost(id: string): Promise<IBlogPost | null> {
    return BlogPostModel.findByIdAndDelete(id);
  }
}
