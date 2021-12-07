import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import DeleteCookieService from "../../services/cookies/deleteCookie.service";

export default class DeleteCookieController {
  async handle(
    req: Request<number>,
    res: Response<AppResponse<string>>
  ): Promise<any> {
    try {
      const deleteCookieService = new DeleteCookieService();
      const cookie = await deleteCookieService.execute(req.params);

      if (cookie) {
        return res.status(200).json({ success: true, message: cookie });
      }

      return res
        .status(400)
        .json({ success: false, message: "Invalid Cookie. Try Again." });
    } catch (err: any) {
      return err.message;
    }
  }
}
