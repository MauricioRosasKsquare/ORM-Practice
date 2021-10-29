import { Router, Request, Response } from 'express';

import { postsGetController, postspostController, postsByUserGetController } from '../controllers'; // This should not be here

export const register = (router: Router) => {

  router.get('/posts', (req: Request, res: Response) => postsGetController.run(req, res));
  
  router.get('/posts/:id', (req: Request, res: Response) => postsByUserGetController.run(req, res));
  
  router.post('/post/:id', (req: Request, res: Response) => postspostController.run(req, res));
};
