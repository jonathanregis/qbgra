const xml2js = require("xml2js");

function parseQBXMLRequest(qbXMLRequest) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({
      explicitArray: false,
    });

    parser.parseString(
      qbXMLRequest,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
}

module.exports = { parseQBXMLRequest };
