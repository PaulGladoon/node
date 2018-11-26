const http = require('http')

const render = require('./lib/render')
const { publicData, home, search, notFound } = require('./routes')

http.ServerResponse.prototype.render = render

http.createServer((req, res) => {
  if (req.url.match(/.(html|css|js|png)$/)) {
    publicData(req, res)
  } else if (req.url === '/') {
    home(req, res)
  } else if (req.url.startsWith('/search')) {
    search(req, res)
  } else {
    notFound(req, res)
  }
}).listen(3000, () => console.log('Сервер работает'))
