import { Router, Request, Response } from 'express';

import { postsGetController, postsPostController, postsByUserGetController, postsDeleteController, postsPatchController } from '../controllers'; // This should not be here

export const register = (router: Router) => {

  router.get('/posts', (req: Request, res: Response) => postsGetController.run(req, res));
  
  router.get('/users/:id/posts', (req: Request, res: Response) => postsByUserGetController.run(req, res));
  
  router.post('/users/:id/posts', (req: Request, res: Response) => postsPostController.run(req, res));



  router.delete('/users/:idPost/posts', (req: Request, res: Response) => postsDeleteController.run(req, res));

  router.patch('/users/:idPost/posts', (req: Request, res: Response) => postsPatchController.run(req, res));
};
