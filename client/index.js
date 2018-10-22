const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path");

app.use(express.static("public"));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
