import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { PostsService } from 'src/services'; // This should not be here

export class PostsDeleteController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, response: Response): Promise<void> {
    const { idPost } = req.params;
    const id = parseInt(idPost, 10)
    if(isNaN(id)){
      throw response.status(httpStatus.NOT_ACCEPTABLE).send("Invalid post id or not given");
    }
    try {
      const PostDeleted = await this.service.deletePost( { id: id , userId: NaN, text: "" } );
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