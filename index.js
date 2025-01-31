import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;
const API_URL = "https://secrets-api.appbrewery.com/random";

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

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