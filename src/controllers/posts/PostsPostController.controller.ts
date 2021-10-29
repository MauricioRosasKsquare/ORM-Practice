import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostPostController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { text } = req.body;
    const { id } = req.params;
    const UserId = parseInt(id, 10);
    try {
      const post = await this.service.addPost({text, UserId});
      response.status(httpStatus.CREATED).json(post);
    } catch (error) {
      response.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
