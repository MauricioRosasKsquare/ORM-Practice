import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { CommentsService } from 'src/services'; // This should not be here

export class CommentsPostController implements Controller {
  constructor(private service: CommentsService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { text } = req.body;
    const { idUser, idPost } = req.params;

    const userId = parseInt(idUser ,10);
    const postId = parseInt(idPost ,10);

    try {
      const Comments = await this.service.addComment({ text, userId, postId });
      response.status(httpStatus.CREATED).json(Comments);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
