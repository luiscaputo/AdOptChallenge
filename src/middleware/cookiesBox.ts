import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { Cookiesbox } from "../models/Cookiesbox";
import { ICookieBox } from "../services/cookiesBox/cookieBox.service";

export const cookiesBox = async (
  req: Request<ICookieBox>,
  res: Response<AppResponse<Cookiesbox[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    cookieId: Yup.number().required("Informe o Cookie."),
    boxId: Yup.number().required("Informe a Caixa a colocar."),
  });
  await showError(req, res, next, schema);
};
