import { UserPostController } from './users/UsersPostController.controller';
import { UsersGetController, UserGetController } from './users/UsersGetController.controller';
import { UserDeleteController } from './users/UsersDeleteController.controller';
import { UserPatchController } from './users/UsersPatchController.controller';

import { PostsGetController, PostsByUserGetController } from './posts/PostsGetController.controller';
import { PostPostController } from './posts/PostsPostController.controller';

import { CommentsGetController } from './comments/CommentsGetController.controller';
import { CommentsPostController } from './comments/CommentsPostController.controller';

import { commentsService, usersService, postsService } from '../services'; // This should not be here


export const usersPostController = new UserPostController(usersService)
export const usersGetController = new UsersGetController(usersService);
export const userGetController = new UserGetController(usersService);
export const userDeleteController = new UserDeleteController(usersService);
export const userPatchController = new UserPatchController(usersService);

export const postsGetController = new PostsGetController(postsService);
export const postspostController = new PostPostController(postsService);
export const postsByUserGetController = new PostsByUserGetController(postsService);

export const commentsGetController = new CommentsGetController(commentsService);
export const commentsPostController = new CommentsPostController(commentsService);

