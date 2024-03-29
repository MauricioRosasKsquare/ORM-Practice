import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { PostsService } from 'src/services'; // This should not be here


export class PostPostController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {

    const userId = parseInt(req.params.id, 10);
    req.params.id = userId.toString()
    if(isNaN(userId)){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }
   
    const text = req.body.text.trim();
    if(text == ""){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field text can't be empty");
    }

    try {
      const post = await this.service.addPost({text:text, userId:userId});
      response.status(httpStatus.CREATED).json(post);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
