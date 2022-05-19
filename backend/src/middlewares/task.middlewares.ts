import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';

export default class TaskMiddlewares {
  private static allRequired = Joi.object().keys({
    title: Joi.string().min(1).required(),
    status: Joi.string().valid('Pronto', 'Em andamento', 'Pendente').required(),
  });

  private static atLeastOne = Joi.object().keys({
    title: Joi.string().min(1),
    status: Joi.string().valid('Pronto', 'Em andamento', 'Pendente'),
  }).or('title', 'status').required();
}
