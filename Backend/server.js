const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json()); // for JSON body parsing

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/event", require("./routes/events"));
app.use("/ticket", require("./routes/tickets"));
app.use("/registration", require("./routes/registration"));
app.use("/comments", require("./routes/comments"));
app.use("/report", require("./routes/reports"));

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
