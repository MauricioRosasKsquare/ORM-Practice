import { UserPostController } from './users/UsersPostController.controller';
import { UsersGetController, UserGetController } from './users/UsersGetController.controller';
import { UserDeleteController } from './users/UsersDeleteController.controller';
import { UserPatchController } from './users/UsersPatchController.controller';

import { PostsGetController, PostsByUserGetController } from './posts/PostsGetController.controller';
import { PostPostController } from './posts/PostsPostController.controller';
import { PostsDeleteController } from './posts/PostsDeleteController.controller';
import { PostsPatchController } from './posts/PostsPatchController.controller';

import { CommentsGetController } from './comments/CommentsGetController.controller';
import { CommentsPostController } from './comments/CommentsPostController.controller';
import { CommentsDeleteController } from './comments/CommentsDeleteController.controller';
import { CommentsPatchController } from './comments/CommentsPatchController.controller';

import { commentsService, usersService, postsService } from '../services'; // This should not be here


export const usersPostController = new UserPostController(usersService)
export const usersGetController = new UsersGetController(usersService);
export const userGetController = new UserGetController(usersService);
export const userDeleteController = new UserDeleteController(usersService);
export const userPatchController = new UserPatchController(usersService);

export const postsGetController = new PostsGetController(postsService);
export const postsPostController = new PostPostController(postsService);
export const postsByUserGetController = new PostsByUserGetController(postsService);
export const postsDeleteController = new PostsDeleteController(postsService);
export const postsPatchController = new PostsPatchController(postsService);

export const commentsGetController = new CommentsGetController(commentsService);
export const commentsPostController = new CommentsPostController(commentsService);
export const commentsDeleteController = new CommentsDeleteController(commentsService);
export const commentsPatchController = new CommentsPatchController(commentsService);


