import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import { Cookiesbox } from "../../models/Cookiesbox";
import CookieBoxService, {
  ICookieBox,
} from "../../services/cookiesBox/cookieBox.service";

export default class CookiesBoxController {
  async handle(
    req: Request<ICookieBox>,
    res: Response<AppResponse<Cookiesbox[]>>
  ) {
    try {
      const cookiesBoxService = new CookieBoxService();
      const { cookieId, boxId } = req.body;

      const cookieBox = await cookiesBoxService.execute({ cookieId, boxId });
      if (cookieBox) {
        return res.status(200).json({ success: true, data: cookieBox });
      }

      return res
        .status(400)
        .json({ success: false, message: "Error. Try Again!" });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
