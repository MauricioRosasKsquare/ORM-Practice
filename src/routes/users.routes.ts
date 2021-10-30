import { Router, Request, Response } from 'express';
import { usersGetController, usersPostController, userGetController, userDeleteController, userPatchController } from '../controllers'; // This should not be here

export const register = (router: Router) => {

//POST 
//Create a new user
  router.post('/users', (req: Request, res: Response) => usersPostController.run(req, res));

  
// DELETE
// Delete user
  router.delete('/users/:userId', (req: Request, res: Response) => userDeleteController.run(req, res));

  
// PATCH
//Update user  
  router.patch('/users/:userId', (req: Request, res: Response) => userPatchController.run(req, res));


//GET   
//Get all users 
  router.get('/users', (req: Request, res: Response) => usersGetController.run(req, res));

//Get user by id
   
  router.get('/users/:id', (req: Request, res: Response) => userGetController.run(req, res));
};
