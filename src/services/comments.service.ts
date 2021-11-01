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

  async getComment(id: string): Promise<Array<CommentAttributes>> {
    try {
      return await Comment.find({_id: {$eq : id} });
    } catch (error) {
      throw new Error('Comment not found');
    }
  }

  async deleteComments(id: string): Promise<any>{
    try {
      return await Comment.findOneAndRemove( {_id: {$eq : id} } );
    } catch (error) {
      throw new Error('Error deleating comments');
    }
  }

  async updateComments(id: string, text: string ): Promise<any> {
    try {
      return await Comment.findOneAndUpdate( {_id: {$eq : id} }, {text:text} );
    } catch (error) {
      throw new Error('Error getting comments');
    }
  }
}
