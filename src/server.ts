import { App } from './index';

const port: number = parseInt(process.env.PORT as string, 4) || 3000;
const app = new App();

app.start(port);
