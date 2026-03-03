import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';

import { TypedRequest } from './types/global/express.types.js';

dotenv.config();
const app = express();

app.use(express.json());

type CreateUserBody = { name: string; email: string };

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello world',
    time: new Date().toISOString(),
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  });
});

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

app.listen(3000, () => {
  console.log('server running on port 3000');
});
