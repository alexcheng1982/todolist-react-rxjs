import app from './app';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, (err) => err ?
  console.error(err) :
  console.info('==> 🚧  App development server listening on port %s', port));
