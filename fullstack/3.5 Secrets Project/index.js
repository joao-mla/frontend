//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3010;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended: true}))

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
app.get("/", (req, res) => {
    sendToIndex(res);
});

app.post("/check", (req, res) => {
    if (passwordAccepted(req)) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        sendToIndex(res);
    }
});

function passwordAccepted(req) {
    console.log(req.body);
    return req.body["password"] === password;
}

function sendToIndex(res) {
    res.sendFile(__dirname + "/public/index.html");
}