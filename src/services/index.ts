import { CommentsService } from "./comments.service";
import { UsersService } from "./users.service";
import { PostsService } from "./posts.service";

const usersService = new UsersService();
const commentsService = new CommentsService();
const postsService = new PostsService();

/**
 * We should not export the class to use as type.
 * 
 * The services should be behind an abstraction like
 * commandBus who knows details about the services
 * 
*/
export { UsersService, usersService,  CommentsService, commentsService, PostsService, postsService }
