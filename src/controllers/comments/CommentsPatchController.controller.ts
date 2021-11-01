import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { CommentsService } from 'src/services'; // This should not be here


export class CommentsPatchController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {

    if(req.params.idComment === undefined){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Id Comment not given");
    }

    const comment = await this.service.getComment(req.params.idComment);

    if(comment.length === 0){
        throw response.status(httpStatus.NOT_ACCEPTABLE).send("Comment not Found");
    }

    if(req.body.text == undefined){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field text is requiered");
    }
    const text = req.body.text.trim();
    if(text == ""){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Field text can't be empty");
    }
    
    try {
      const PostDeleted = await this.service.updateComments( req.params.idComment, req.body.text);
      if(PostDeleted !== null){
        response.status(httpStatus.OK).json(PostDeleted);
      }else{
        response.status(httpStatus.OK).send("Post not Found");
      }
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}