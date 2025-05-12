const express = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

const portfolioCategoryRoutes = require("./routes/portfolioCategoryRoutes");
const authRoutes = require("./routes/authRoutes");
const contactInfo = require("./routes/contactRoutes");
const seo = require("./routes/seoRoutes");
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/", require("./routes/index"));
app.use("/api/admin/portfolio-categories", portfolioCategoryRoutes);
app.use("/api/admin/contact-info", contactInfo);
app.use("/api/admin/seo", seo);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
