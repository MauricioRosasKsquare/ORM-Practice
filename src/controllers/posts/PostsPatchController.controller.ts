import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostsPatchController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {

    const id = parseInt(req.params.idPost, 10);
    
    if(isNaN(id)){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }
    
    if(req.body.text == undefined){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field text is requiered");
    }
    const text = req.body.text.trim();
    if(text == ""){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field text can't be empty");
    }
    try {
      const post = await this.service.updatePost({ id, text, userId: NaN });
      if(post !== null){
        response.status(httpStatus.OK).json(post);
      }else{
        throw response.status(httpStatus.OK).send("Post not Found");
      }
      
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}