import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { UsersService } from 'src/services'; // This should not be here

export class UserPatchController implements Controller {
  constructor(private service: UsersService) {};

  async run(req: Request, response: Response): Promise<void> {

    const id = parseInt(req.params.userId, 10);
    
    if(isNaN(id)){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }
    
    if(req.body.name == undefined){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field name is requiered");
    }
    const name = req.body.name.trim();
    if(name == ""){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field name can't be empty");
    }
    try {
      const user = await this.service.updateUser({ id, name });
      if(user !== null){
        response.status(httpStatus.OK).json(user);
      }else{
        throw response.status(httpStatus.OK).send("User not Found");
      }
      
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}