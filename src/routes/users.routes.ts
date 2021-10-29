import { Router, Request, Response } from 'express';
import { usersGetController, usersPostController, userGetController } from '../controllers'; // This should not be here

export const register = (router: Router) => {
  /**
   * POST /users
   * Create a new user
   */
  router.post('/users', (req: Request, res: Response) => usersPostController.run(req, res));
  
  /**
   * GET /
   * Get all users
   */
  router.get('/users', (req: Request, res: Response) => usersGetController.run(req, res));

    /**
   * GET /
   * Get user by id
   */
  router.get('/user/:id', (req: Request, res: Response) => userGetController.run(req, res));
};
