const express = require("express");
const { channelId } = require("@gonetone/get-youtube-id-by-url");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


app.post("/channel-id", async (req, res) => {
    const url = req.body.url;

    try {
        const id = await channelId(url);
        res.send(id);
    } catch (err) {
        res.send("Some error occurred");
    }
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
