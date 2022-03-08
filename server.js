const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json());

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/authors", require("./routes/api/authors"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/genres", require("./routes/api/genres"));
app.use("/api/reviews", require("./routes/api/reviews"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
