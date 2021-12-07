import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { Box } from "../models/Box";
import { IBox } from "../services/box/createBox.service";

export const createBox = async (
  req: Request<IBox>,
  res: Response<AppResponse<Box[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Informe o nome da Caixa."),
    description: Yup.string()
      .required("Informe o código do Sabor.")
      .min(15, "A descrição deve ter no mínimo 6 digitos")
      .max(35, "O Sabor deve ter no máximo 35 digitos"),
  });
  await showError(req, res, next, schema);
};
