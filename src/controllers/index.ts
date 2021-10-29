import { UserPostController } from './users/UsersPostController.controller';
import { UsersGetController, UserGetController } from './users/UsersGetController.controller';

import { PostsGetController, PostsByUserGetController } from './posts/PostsGetController.controller';
import { PostPostController } from './posts/PostsPostController.controller';

import { PublishersGetController } from './PublishersGetController';
import { PublishersPostController } from './PublishersPostController';

import { publishersService, usersService,postsService } from '../services'; // This should not be here


export const usersPostController = new UserPostController(usersService)
export const usersGetController = new UsersGetController(usersService);
export const userGetController = new UserGetController(usersService);
export const postsGetController = new PostsGetController(postsService);
export const postspostController = new PostPostController(postsService);
export const postsByUserGetController = new PostsByUserGetController(postsService);
export const publishersGetController = new PublishersGetController(publishersService);
export const publishersPostController = new PublishersPostController(publishersService);

