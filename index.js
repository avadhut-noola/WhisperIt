import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs",
        {
            secret : result.data.secret,
            user : result.data.username,
        });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).json({ error: "Failed to fetch secret" });
    }
});

app.get("/random", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render(index.ejs, { secret: result.data.secret, username: result.data.username });
    } catch (error) {
        console.error(error.response.data);
        res.status(500).json({ error: "Failed to fetch secret" });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
})