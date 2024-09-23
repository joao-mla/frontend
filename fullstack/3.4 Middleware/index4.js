import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3010;

app.use(bodyParser.urlencoded({extended: true}))
app.use(morgan("dev"))

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  var bandName = req.body.street + req.body.pet;
  res.send("<h1>Your Band Name is:</h1> <p>" + bandName + "</p>");
});