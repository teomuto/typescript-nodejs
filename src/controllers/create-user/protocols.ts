import { User } from "../../models/user";
import { HttpRequest } from "../protocols";

export interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}

// export interface ICreateUserController {
//     handler(): Promise<HttpRequest<>>;
// }
