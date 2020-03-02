const express = require('express'); // 加载express
const { render } = require('./build/bundle.ssr'); // 加载ssr

const app = express();

app.use(express.static('.'))


app.get('/*', (req, res) => { // 所有请求都走这里处理
    const [html, context] = render(req)
    console.log(context)
    res.send(`
    <html>
    <head>
        <meta charset="UTF-8">
        <title>SSR</title>
        <link href="build/styles/main.8f173ff5.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">${html}</div>
        <script src="build/bundle.web.js"></script>
    </body>
    </html>
    `);
    console.log(context)
});

app.listen(8080)