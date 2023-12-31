import { Request, Response } from "express";
import { AuthUserService } from "../../services/users/AuthUserService";

class AuthUserController {
  async handle(request : Request, response: Response) {
    const { email, password } = request.body;
    const authUserService = new AuthUserService();
    const user = await authUserService.execute({
      email,
      password
    });
    return response.json(user).status(200).send();
  }

}

export { AuthUserController };