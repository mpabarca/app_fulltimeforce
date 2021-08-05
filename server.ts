const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

app.get("/api_commit", async (req, res) => {
    try {
		const response = await axios({
			url: "https://api.github.com/repos/mpabarca/app_fulltimeforce/commits",
			method: "get",
		});

        if (res.statusCode === 200) {
            res.json({ 
                success: true,
                data: response.data
            });
        } else {
            console.log("Error while trying to connect to the API");
            res.json({ 
                success: false,
                data: null
            });
        }

	} catch (err) {
        console.log(err);
        res.json({ 
            success: false,
            data: null
        });
	}
});