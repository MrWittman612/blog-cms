const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

function start() {
  app.listen(port, () => console.log('server started'));
}
exports.start = start;
