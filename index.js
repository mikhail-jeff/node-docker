const express = require("express");

const app = express();

app.use("/", (req, res) => {
	res.json({ "Server Message": "HELLO DOCKER" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
