const { db } = require("../firebase.js");

const products = db.collection("products");
const orders = db.collection("orders");
const banners = db.collection("banners");

module.exports = {
  products,
  orders,
  banners
};
