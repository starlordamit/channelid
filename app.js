const express = require("express");
const { channelId , videoId} = require("@gonetone/get-youtube-id-by-url");
const app = express();
const PORT = 3000;

// Define a route that takes a URL parameter and returns a value
app.get("/api", async(req, res) => {
    const urlParameter = req.query.key;

    // Simple logic (you can replace this with your own logic)
	try{
    const result = await channelId(urlParameter);
	console.log(result);
    res.json(result);}
	catch(err){
		try{
			const result = await videoId(urlParameter);
			console.log(result);
			res.json(result);
		}
		catch(err){
		res.json("Some error occurred");}
	}
});

// app.post(async (req, res) => {
//     const url = req.body.url;
//     try {
//         const id = await channelId(url);
//         res.send(id);
//     } catch (err) {
//         res.send("Some error occurred");
//     }
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
