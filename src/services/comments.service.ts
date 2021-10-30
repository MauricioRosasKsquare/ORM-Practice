import { Comment, CommentCreationAttributes, CommentAttributes } from '../models/Comment';

export class CommentsService {
  async addComment(userInfo: CommentCreationAttributes): Promise<CommentAttributes> {
    try {
      const comment = await Comment.create(userInfo);
      return comment;
    } catch (error) {
      throw new Error('Error creating comment');
    }
  }

  async getComments(): Promise<Array<CommentAttributes>> {
    try {
      return await Comment.find();
    } catch (error) {
      throw new Error('Error getting comments');
    }
  }
}
