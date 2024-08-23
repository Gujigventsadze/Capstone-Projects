import express from "express";
import cors from "cors";
import axios from "axios";


const app = express();
const port = 3001;
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "d18beefe-06f5-48d2-a9e8-194b00015975" } }
      );
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});