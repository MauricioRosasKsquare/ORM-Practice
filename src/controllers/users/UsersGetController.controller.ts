import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UsersGetController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.service.getUsers();
      if (users.length === 0){
        res.status(201).send("No users found");
      }else{
        res.status(201).json(users);
      }
      
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export class UserGetController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const userid = parseInt(id, 10)
    if(isNaN(userid)){
      throw res.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }
    try {
      const user = await this.service.getUser({id:userid});
      if (user.length !== 0){
        res.status(201).json(user);
      }else{
        res.status(httpStatus.OK).send("User not foud");
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}