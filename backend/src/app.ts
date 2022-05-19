import bodyParser from 'body-parser';
import express, { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import router from './router';

const app = express();

app.use(bodyParser.json());

app.get('/', (_req: Request, res: Response) => (
  res.status(StatusCodes.OK).json('Bem vindo ao backend de Ebyrt Tasks!')
));

app.use('/tasks', router.tasks);

export default app;
