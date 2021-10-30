import { Post, PostCreationAttributes, PostAttributes } from '../models/Post';


export class PostsService {
  async addPost(postInfo: PostCreationAttributes): Promise<PostAttributes> {
    try {
      const post = await Post.create(postInfo);
      return post;
    } catch (error) {
      throw new Error('Error creating a post');
    }
  }

  async getPosts(): Promise<Array<Post>> {
    try {
      return await Post.findAll();
    } catch (error) {
      throw new Error('Error getting posts');
    }
  }

  async getPostsByUser(postInfo: PostCreationAttributes): Promise<Array<Post>> {
    try {
      return await Post.findAll({ where: { userId: postInfo.userId }});
    } catch (error) {
      throw new Error('Error getting posts by user');
    }
  }
}
