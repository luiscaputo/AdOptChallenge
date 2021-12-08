import { Request, Response } from "express";
import { AppResponse } from "../../@types";
import ImportCookieService, {
  IImportFile,
} from "../../services/import/importCookie.service";

export default class ImportCookieController {
  async handle(req: Request<IImportFile>, res: Response<AppResponse<string>>) {
    try {
      const importCookieService = new ImportCookieService();
      const { cookieId } = req.body;

      await importCookieService.execute({ cookieId });
      return res
        .status(200)
        .json({ success: true, message: "Cookie imported in src/aco/ACO.txt" });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
