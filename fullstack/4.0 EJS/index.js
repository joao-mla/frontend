import express from "express";

const app = express();
const port = 3010;
var type = "";
var activity = "";

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
app.get("/", (req, res) => {
    const d = new Date();
    var day = d.getDay() % 6;

    if (day === 0) {
        type = "the weekend";
        activity = "have fun";
    } else {
        type = "a weekday";
        activity = "work hard";
    }

    res.render("index.ejs", 
        { type: type, activity: activity}
    );
})