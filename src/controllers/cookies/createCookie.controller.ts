import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Cookies } from "../../models/Cookies";
import CreateCookieService, {
  ICreateCookie,
} from "../../services/cookies/createCookie.service";

export default class CreateCookieController {
  async handle(
    req: Request<ICreateCookie>,
    res: Response<AppResponse<Cookies[]>>
  ): Promise<any> {
    try {
      const { name, formatId, flavorId, price, description } = req.body;
      const createCookieService = new CreateCookieService();

      const cookie = await createCookieService.execute({
        name,
        formatId,
        flavorId,
        price,
        description,
      });

      if (cookie) {
        return res
          .status(200)
          .json({ success: true, message: "Cookie Created.", data: cookie });
      }
      return res
        .status(400)
        .json({ success: false, message: "Invalid Cookie. Try Again!" });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
