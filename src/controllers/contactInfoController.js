const ContactInfo = require("../models/contactInfo");

exports.updateContactInfo = async (req, res) => {
  try {
    const { address, phone, email, socialMediaLinks } = req.body;

    if (!address || !address.trim()) {
      return res.status(400).json({ message: "Adres bilgisi zorunludur" });
    }
    if (!phone || !phone.trim()) {
      return res.status(400).json({ message: "Telefon numarası zorunludur" });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ message: "E-posta adresi zorunludur" });
    }

    let contactInfo = await ContactInfo.findOne();

    if (!contactInfo) {
      contactInfo = new ContactInfo({
        address,
        phone,
        email,
        socialMediaLinks,
      });
      await contactInfo.save();

      return res.status(201).json({
        message: "İletişim bilgileri başarıyla oluşturuldu",
        contactInfo,
      });
    }

    contactInfo.address = address;
    contactInfo.phone = phone;
    contactInfo.email = email;
    contactInfo.socialMediaLinks = socialMediaLinks;

    await contactInfo.save();

    res.status(200).json({
      message: "İletişim bilgileri başarıyla güncellendi",
      contactInfo,
    });
  } catch (error) {
    res.status(500).json({ message: "Bir hata oluştu", error: error.message });
  }
};
