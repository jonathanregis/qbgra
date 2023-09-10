const {
  buildRequest,
  submitRequest,
} = require("../utils/api");

async function addSale(saleData) {
  const request = buildRequest(
    "INVOICE",
    saleData
  );
  const result = await submitRequest(request);
  return result;
}

module.exports = {
  addSale,
};
