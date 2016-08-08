export default (markup) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id='app'>${ markup }</div>
        <script src="/assets/app.js"></script>
      </body>
    </html>
  `;
}