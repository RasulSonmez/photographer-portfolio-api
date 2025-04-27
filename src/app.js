const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
// app.use("upload", express.static("upload"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/", require("./routes/index"));

// app.use('/api/portfolio', require('./routes/portfolioRoutes'));
// app.use('/api/contact', require('./routes/contactRoutes'));
// app.use('/api/seo', require('./routes/seoRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
