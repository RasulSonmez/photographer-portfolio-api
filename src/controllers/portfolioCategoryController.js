const PortfolioCategory = require("../models/PortfolioCateogry");

//index function
exports.index = async (req, res) => {
  try {
    const categories = await PortfolioCategory.find({
      isDeleted: false,
    });

    if (categories.length === 0) {
      return res.status(404).json({ message: "Portföy kategorisi bulunamadı" });
    }

    res.status(200).json({
      message: "Portföy kategorileri başarıyla listelendi",
      categories,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//create function
exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res
        .status(400)
        .json({ message: "Portföy kategori adı zorunludur" });
    }
    const newCategory = new PortfolioCategory({ name });

    await newCategory.save();

    res.status(201).json({
      message: "Portföy kategorisi başarıyla oluşturuldu",
      category: newCategory,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//edit function
exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name || name.trim() === "") {
      return res
        .status(400)
        .json({ message: "Portföy kategori adı zorunludur" });
    }

    const updatedCategory = await PortfolioCategory.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Portföy kategorisi bulunamadı" });
    }

    res.status(200).json({
      message: "Portföy kategorisi başarıyla güncellendi",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete function
exports.deletedCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedCategory = await PortfolioCategory.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
      },
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Portföy kategorisi bulunamadı" });
    }

    res.status(200).json({
      message: "Portföy kategorisi başarıyla silindi (soft delete)",
      category: updatedCategory,
    });
  } catch (error) {
    res.status(400).json({
      message: "Silme işlemi başarısız",
      error: error.message,
    });
  }
};
