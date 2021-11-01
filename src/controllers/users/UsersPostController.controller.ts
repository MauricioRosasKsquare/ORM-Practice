import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserPostController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, response: Response): Promise<void> {
    
    if(req.body.name == undefined){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field name is requiered");
    }
    const name = req.body.name.trim();
    if(name == ""){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field name can't be empty");
    }
    try {
      const user = await this.service.addUser({ name });
      response.status(httpStatus.CREATED).json(user);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
