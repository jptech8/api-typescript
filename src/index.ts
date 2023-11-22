import express, { Request, Response } from 'express';
import router from './routes/routes.index';
const app = express();
const port = process.env.PORT || 3000;


app.use('/', router);
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });