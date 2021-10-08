/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      const userAlreadExists = this.showUserProfileUseCase.execute({ user_id });

      return response.json(userAlreadExists);
    } catch (e) {
      return response.status(404).json({ error: e.message });
    }
  }
}

export { ShowUserProfileController };
