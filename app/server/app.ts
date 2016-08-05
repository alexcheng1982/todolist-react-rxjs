import * as path from 'path';
import * as express from 'express';

const app = express();

app.use('/assets', express.static(path.join(__dirname, '..', '..', 'dist')));

export default app;