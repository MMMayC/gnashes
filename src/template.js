// html skeleton provider
function template(initialState = {}, content){
  return `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Gnashes</title>
          </head>
          <body>
            <div class="content">
                <div id="app">${content}</div>
            </div>
            <script>
                window.__STATE__ = ${JSON.stringify(initialState)}
            </script>
            <script src="public/bundle.js"></script>
          </body>`;
}

module.exports = template;
