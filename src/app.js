const express = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const portfolioCategoryRoutes = require("./routes/portfolioCategoryRoutes");
const authRoutes = require("./routes/authRoutes");
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/", require("./routes/index"));
app.use("/api/admin/portfolio-categories", portfolioCategoryRoutes);

// app.use("upload", express.static("upload"));
// app.use('/api/portfolio', require('./routes/portfolioRoutes'));
// app.use('/api/contact', require('./routes/contactRoutes'));
// app.use('/api/seo', require('./routes/seoRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
