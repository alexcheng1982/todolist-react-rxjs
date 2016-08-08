import * as path from 'path';
import * as express from 'express';
import mainRoute from './routes/main';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '..', '..', 'dist')));
app.use('/', mainRoute);

export default app;