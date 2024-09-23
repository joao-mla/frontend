import express from "express";

const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1> <p>If you want to contact me, don't.</p>");
})

app.get("/about", (req, res) => {
    res.send("<h1>About</h1> <p>This is a page about me</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});