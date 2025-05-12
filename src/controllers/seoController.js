const Seo = require("../models/Seo");

exports.updateSeo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Karakter uzunluğu kontrolleri
    if (!title || title.length < 1 || title.length > 150) {
      return res.status(400).json({
        message: "Title 1 ile 150 karakter arasında olmalıdır.",
      });
    }

    if (!description || description.length < 70 || description.length > 155) {
      return res.status(400).json({
        message: "Description 70 ile 155 karakter arasında olmalıdır.",
      });
    }

    let seo = await Seo.findOne();

    if (!seo) {
      seo = new Seo({ title, description });
      await seo.save();

      return res.status(201).json({
        message: "Seo bilgileri başarıyla oluşturuldu.",
        seo,
      });
    }

    seo.title = title;
    seo.description = description;
    await seo.save();

    res.status(200).json({
      message: "Seo bilgileri başarıyla güncellendi.",
      seo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Bir hata oluştu.",
      error: error.message,
    });
  }
};
