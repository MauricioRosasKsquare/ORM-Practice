import { model, Schema } from 'mongoose';

/**
 * Create an interface representing a document in MongoDB.
 * 
 * We tried to use the name convention used in User model with the
 * naming of the interface.
 */
export interface CommentAttributes {
  text: string;
  userId: number;
  postId: number;
}

/**
 * Just to follow the convention that we use with the User model
 */
export interface CommentCreationAttributes extends CommentAttributes {};

/**
 * Create a Schema corresponding to the document interface.
 * 
 * This object is required for mongo to indicate metadata about
 * the fields in the model.
 */
const schema = new Schema<CommentAttributes>({
  text: { type: String, required: true },
  userId: { type: Number, required: true },
  postId: { type: Number, required: true },
});

/**
 * Mongo doens't have a complex way to create ODM's models, so the
 * only need to do is execute the model() function and that's it,
 * we have a fresh model!
 */
export const Comment = model<CommentAttributes>('Comment', schema);
