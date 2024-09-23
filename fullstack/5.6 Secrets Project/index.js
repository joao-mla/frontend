// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

const url = "https://secrets-api.appbrewery.com/"
const yourBearerToken = "e408b922-d3a2-40db-9e25-e115c2248b19";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
    try {
      const result = await axios.get(url + "random", config);
      const content = result.data;
      res.render("index.ejs", { 
        secret: content["secret"],
        user: content["username"]
    });
    } catch (error) {
        console.log("error");
        res.status(500);
    }
  });

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
