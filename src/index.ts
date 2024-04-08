import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 8000;

app.get("/users", (req, res) => {
  res.send("aoba");
});

app.listen(port, () => console.log(`Listening to port ${port}`));
