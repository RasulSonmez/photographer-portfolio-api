const PortfolioCategory = require("../models/PortfolioCateogry");

exports.index = async (req, res) => {
  try {
    const portfolioCategories = await PortfolioCategory.find();
    res.status(200).json(portfolioCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const portfolioCategory = new PortfolioCategory(req.body);
    await portfolioCategory.save();
    res.status(201).json(portfolioCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
