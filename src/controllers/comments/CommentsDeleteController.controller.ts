import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentsDeleteController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {

    if(req.params.idComment === undefined){
        throw response.status(httpStatus.NOT_ACCEPTABLE).send("Id Comment not given");
    }
    await this.service.getComment(req.params.idComment);

    

    try {
      const CommentDeleted = await this.service.deleteComments(req.params.idComment);
      if(CommentDeleted !== null){
        response.status(httpStatus.OK).json(CommentDeleted);
      }else{
        response.status(httpStatus.OK).send("Comment not Found");
      }
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}