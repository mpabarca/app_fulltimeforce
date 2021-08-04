const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get("/express_backend", (req, res) => {
    res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});