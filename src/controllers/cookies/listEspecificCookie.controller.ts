import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Cookies } from "../../models/Cookies";
import ListEspecificCookieService from "../../services/cookies/listEspecificCookie.service";

export default class ListEspecificCookieController {
  async handle(
    req: Request<number>,
    res: Response<AppResponse<Cookies[]>>
  ): Promise<any> {
    try {
      const listEspecificCookie = new ListEspecificCookieService();
      const cookie = await listEspecificCookie.execute(req.params);

      if (cookie) {
        return res.status(200).json({ success: true, data: cookie });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid CookieId. Try Again." });
    } catch (err: any) {
      return err.message;
    }
  }
}
