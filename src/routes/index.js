const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Ana sayfa isteği geldi");
  res.send("Uygulama çalışıyor! 🚀");
});

module.exports = router;
