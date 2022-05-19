import express, { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.get('/', (_req: Request, res: Response) => (
  res.status(StatusCodes.OK).json('Bem vindo ao backend de Ebyrt Tasks!')
));

export default app;
