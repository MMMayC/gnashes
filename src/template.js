// html skeleton provider
function template(initialState = {}, content){
  let scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/bundle.js"></script>
                `

  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> Gnashes </title>
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
