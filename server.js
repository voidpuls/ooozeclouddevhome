const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

// Next.js uygulamamızı başlat
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // Static dosyalar için
    server.use(express.static(path.join(__dirname, 'public')));

    // API route'ları için
    server.all('/api/*', function(req, res) {
      return handle(req, res);
    });

    // Tüm Next.js sayfaları için
    server.all('*', function(req, res) {
      return handle(req, res);
    });

    // Sunucuyu başlat
    server.listen(port, function(err) {
      if (err) {
        throw err;
      }
      console.log('> Ready on port ' + port);
    });
  })
  .catch(function(ex) {
    console.error(ex.stack);
    process.exit(1);
  }); 
