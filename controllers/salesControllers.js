const { addSale } = require("../services/sales");
const {
  parseQBXMLRequest,
} = require("../utils/qbxml");

async function addSaleController(req, res, next) {
  try {
    const qbXMLRequest = req.body;

    const salesData =
      parseQBXMLRequest(qbXMLRequest);

    addSale(salesData).then((r) =>
      console.log({ r, data: r.data })
    );

    // Send a response back to QBWC
    const qbXMLResponse = `<YourQBXMLResponse></YourQBXMLResponse>`;
    res.set("Content-Type", "text/xml");
    res.send(qbXMLResponse);
  } catch (error) {
    console.error(
      "Error processing QBWC request:",
      error
    );
    res
      .status(500)
      .send("Error processing QBWC request");
  }
}

module.exports = {
  addSaleController,
};
