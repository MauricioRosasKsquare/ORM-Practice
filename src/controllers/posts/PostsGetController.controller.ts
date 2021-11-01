import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from "../Controller";
import { PostsService } from 'src/services'; // This should not be here



export class PostsGetController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, res: Response): Promise<void> {
    try {
      const posts = await this.service.getPosts();
      if(posts.length === 0 ){
        res.status(httpStatus.OK).send("No posts found");
      }else{
        res.status(httpStatus.OK).json(posts);
      }
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

export class PostsByUserGetController implements Controller {
  constructor(private service: PostsService) {};

  async run(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id, 10);
    req.params.id = userId.toString()
    if(isNaN(userId)){
      throw res.status(httpStatus.NOT_ACCEPTABLE).send("Invalid user id or not given");
    }

    try {
      const posts = await this.service.getPostsByUser({text: "" , userId});
      if(posts.length === 0){
        res.status(httpStatus.OK).send("No posts related found");
      }else{
        res.status(httpStatus.OK).json(posts);
      }
      
    } catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

