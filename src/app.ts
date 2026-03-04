import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';

import client from './lib/postgres';
import { TypedRequest } from './types/global/express.types';

dotenv.config();
const app = express();

app.use(express.json());

type CreateUserBody = { name: string; email: string };

app.post('/user', (req: TypedRequest<{ body: CreateUserBody }>, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'missing fields' });
  }
  const user = {
    id: Math.random().toString(36).substring(7),
    name: name,
    email: email,
    createdAt: new Date(),
  };
  return res.status(201).json(user);
});

app.get('/users', async (req: Request, res: Response) => {
  const result = await client.rawQuery('SELECT * from users');
  res.send(result);
});

app.get('/users/:id', async (req: TypedRequest<{ params: { id: string } }>, res: Response) => {
  const {
    params: { id },
  } = req;
  const result = await client.rawQuery('SELECT * from users WHERE id = $1', [id]);
  res.send(result);
});

app.listen(3000, () => {
  console.log('server running on port 3000');
});
