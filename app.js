const express = require("express");
const { initializeRoutes } = require("./api/index");
const port = 4500;
const app = new express();

initializeRoutes(app);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
