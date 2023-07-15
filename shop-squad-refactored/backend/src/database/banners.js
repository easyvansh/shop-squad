const db = require("./db");

const getAllBanners = async () => {
  const snapshot = await db.banners.doc("001").get();
  return snapshot.data();
};

module.exports = {
  getAllBanners,
};
