import { BASE_URL } from "../types/constanta.ts";
import type { Post } from "../types/post.ts";
import { ApiService } from "./api.ts";


export class PostsService extends ApiService<Post> {
    constructor() {
        super(`${BASE_URL}/posts`)
    }
}

