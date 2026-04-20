const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

const API_KEY = "517c394f"; // ✅ API kamu

app.get("/api/movie", async (req, res) => {
  const title = req.query.title;

  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`
    );

    res.json(response.data);
  } catch (error) {
    console.log(error); // 🔥 biar kelihatan errornya
    res.status(500).send("Error ambil data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running di http://localhost:${PORT}`);
});