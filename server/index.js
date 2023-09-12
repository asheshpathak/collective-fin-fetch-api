const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3286;

app.use(
  express.static(path.join(__dirname, "../client/collective-fetch-api/build"))
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/collective-fetch-api/build", "index.html")
  );
});

app.get("/api", (req, res) => {
  res.send("API Route Working");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
