import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { Format } from "../models/Format";
import { IFormat } from "../services/format/createFormat.service";

export const createFormat = async (
  req: Request<IFormat>,
  res: Response<AppResponse<Format[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Informe o nome do formato."),
    code: Yup.string()
      .required("Informe o código do formato.")
      .min(6, "O Código do formato deve ter no minimo 6 digitos")
      .max(6, "O Código do formato deve ter no máximo 6 digitos"),
  });
  await showError(req, res, next, schema);
};
