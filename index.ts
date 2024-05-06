import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("Hello from food order backend");
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
