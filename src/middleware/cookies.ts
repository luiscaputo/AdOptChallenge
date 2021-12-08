import { NextFunction, Request, Response } from "express";
import * as Yup from "yup";
import { showError } from ".";
import { AppResponse } from "../@types";
import { Cookies } from "../models/Cookies";
import { ICreateCookie } from "../services/cookies/createCookie.service";

export const createCookie = async (
  req: Request<ICreateCookie>,
  res: Response<AppResponse<Cookies[]>>,
  next: NextFunction
) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Informe o nome do Cookie."),
    formatId: Yup.number().required("Informe o formato do Cookie."),
    flavorId: Yup.number().required("Informe o sabor dp cookie."),
    price: Yup.number().required("Informe o Valor do Cookie."),
    description: Yup.string()
      .required("Descreva o Cookie.")
      .max(35, "Descreva no máximo com 35 digitos."),
  });
  await showError(req, res, next, schema);
};
