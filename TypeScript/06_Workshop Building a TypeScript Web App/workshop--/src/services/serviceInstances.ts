import { PostsService } from "./postsService.ts";
import { UsersService } from "./usersService.ts";


const postsService = new PostsService();
const usersService = new UsersService();

export const services = {
    postsService,
    usersService
};