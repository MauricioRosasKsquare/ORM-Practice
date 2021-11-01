import { Router, Request, Response } from 'express';
import { commentsGetController, commentsPostController, commentsDeleteController, commentsPatchController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /publishers
   * Create a new comment
   */
  router.post('/comments/:idUser/:idPost', (req: Request, res: Response) => commentsPostController.run(req, res));
  
  /**
   * GET /
   * Get all Comments
   */
  router.get('/comments', (req: Request, res: Response) => commentsGetController.run(req, res));

  router.delete('/comments/:idComment', (req: Request, res: Response) => commentsDeleteController.run(req, res));
  
  router.patch('/comments/:idComment', (req: Request, res: Response) => commentsPatchController.run(req, res));
};
