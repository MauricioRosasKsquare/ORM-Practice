import { Router, Request, Response } from 'express';
import { commentsGetController, commentsPostController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /publishers
   * Create a new user
   */
  router.post('/comments/:idUser/:idPost', (req: Request, res: Response) => commentsPostController.run(req, res));
  
  /**
   * GET /
   * Get all publishers
   */
  router.get('/comments', (req: Request, res: Response) => commentsGetController.run(req, res));
};
