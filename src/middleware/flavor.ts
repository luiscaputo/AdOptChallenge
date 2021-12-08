import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { Flavors } from "../models/Flavors";
import { IFlavors } from "../services/flavors/createFlavor.service";

export const createFlavor = async (
  req: Request<IFlavors>,
  res: Response<AppResponse<Flavors[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Informe o nome Sabor."),
    code: Yup.string()
      .required("Informe o código do Sabor.")
      .min(6, "O Código do Sabor deve ter no minimo 6 digitos")
      .max(6, "O Código do Sabor deve ter no máximo 6 digitos"),
  });
  await showError(req, res, next, schema);
};
