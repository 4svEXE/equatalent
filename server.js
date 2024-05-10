const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/equatalent/browser')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/equatalent/browser', 'index.html'));
});

const port = 9090;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

