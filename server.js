const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      student_id: "UGR/001",
      first_name: "Test",
      last_name: "User",
      department: "Computing",
      year_level: 3
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on " + PORT));
