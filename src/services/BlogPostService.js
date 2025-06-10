import { BlogPostModel } from '../models/BlogPost.js';

export class BlogPostService {
  // Get all blog posts
  static async getAllBlogPosts() {
    return BlogPostModel.find();
  }

  // Get a single blog post by ID
  static async getBlogPostById(id) {
    return BlogPostModel.findById(id);
  }

  // Create a new blog post
  static async createBlogPost(postData) {
    const newPost = new BlogPostModel(postData);
    return newPost.save();
  }

  // Update an existing blog post
  static async updateBlogPost(
    id,
    updatedData
  ) {
    return BlogPostModel.findByIdAndUpdate(id, updatedData, { new: true });
  }

  // Delete a blog post by ID
  static async deleteBlogPost(id) {
    return BlogPostModel.findByIdAndDelete(id);
  }
}
