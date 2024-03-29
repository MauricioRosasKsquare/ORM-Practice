import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { CommentsService } from 'src/services';

export class CommentsGetController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const comments = await this.service.getComments();
      if(comments.length === 0){
        throw res.status(httpStatus.NOT_ACCEPTABLE).send("There is no comments yet");
    }else{
      res.status(httpStatus.CREATED).json(comments);
    }
      
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
