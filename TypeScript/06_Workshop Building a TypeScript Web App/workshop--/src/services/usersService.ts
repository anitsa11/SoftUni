import { BASE_URL } from "../types/constanta.ts";
import type { User } from "../types/user.ts";
import { ApiService } from "./api.ts";


export class UsersService extends ApiService<User> {
    constructor() {
        super(`${BASE_URL}/users`)
    }
}

