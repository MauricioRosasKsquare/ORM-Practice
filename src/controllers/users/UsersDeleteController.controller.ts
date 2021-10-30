import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserDeleteController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { userId } = req.params;
    const id = parseInt(userId, 10)
    if(isNaN(id)){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }
    try {
      const userDeleted = await this.service.deleteUser({ id });
      if(userDeleted !== null){
        response.status(httpStatus.OK).json(userDeleted);
      }else{
        response.status(httpStatus.OK).send("User not Found");
      }
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}