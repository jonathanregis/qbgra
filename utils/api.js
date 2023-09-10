const { getConfig } = require("../config");

const axios = require("axios");
function makeCompanyField() {
  const {
    COMPANY_NAME,
    COMPANY_SECURITY_KEY,
    COMPANY_TIN,
  } = getConfig();
  return {
    company: {
      COMPANY_NAMES: COMPANY_NAME,
      COMPANY_SECURITY_KEY,
      COMPANY_TIN,
    },
  };
}

function makeHeaderField(data) {
  return {
    header: {
      COMPUTATION_TYPE: "INCLUSIVE",
      FLAG: "INVOICE",
      SALE_TYPE: "NORMAL",
      USER_NAME: "ARNAU",
      NUM: "SAP12320t01",
      INVOICE_DATE: "2020-07-15",
      CURRENCY: "GHS",
      EXCHANGE_RATE: "1",
      CLIENT_TIN: "C0022825405",
      CLIENT_TIN_PIN: "2222",
      CLIENT_NAME: "Elissa",
      TOTAL_VAT: "159",
      TOTAL_LEVY: "60",
      TOTAL_AMOUNT: "3219",
      ITEMS_COUNTS: "2",
      VOUCHER_AMOUNT: "0",
      DISCOUNT_TYPE: "GENERAL",
      DISCOUNT_AMOUNT: "0",
      FILE_NAME: "",
      CALL_BACK:
        "http://host/receiptCallback.php",
    },
  };
}

function buildRequest(type, data) {
  if (!flags.includes(type)) {
    throw new Error(
      "Only allowed operations are %s",
      flags.join(", ")
    );
  }
  const parsedData = {
    ...data,
    FLAG: type,
  };
  const items = {
    ...data.items,
  };
  return {
    ...makeCompanyField(),
    ...makeHeaderField(parsedData),
    item_list: [
      {
        ITMREF: "MANGO01",
        ITMDES: "Mango juice",
        TAXRATE: "0",
        TAXCODE: "A",
        LEVY_AMOUNT_A: "0",
        LEVY_AMOUNT_B: "0",
        LEVY_AMOUNT_C: "0",
        LEVY_AMOUNT_D: "0",
        QUANTITY: "20",
        UNITYPRICE: "100",
        ITMDISCOUNT: "0",
        BATCH: "TEST",
        EXPIRE: "2050-07-07",
        ITEM_CATEGORY: "",
      },
      {
        ITMREF: "1000P1322",
        ITMDES: "INYAGE MILK 2% 500ML",
        TAXRATE: "15",
        TAXCODE: "B",
        LEVY_AMOUNT_A: "25",
        LEVY_AMOUNT_B: "25",
        LEVY_AMOUNT_C: "10",
        LEVY_AMOUNT_D: "0",
        QUANTITY: "1",
        UNITYPRICE: "1219",
        ITMDISCOUNT: "0",
        BATCH: "",
        EXPIRE: "2060-07-07",
        ITEM_CATEGORY: "",
      },
    ],
  };
}
const flags = [
  "INVOICE",
  "PURCHASE",
  "REFUND",
  "PURCHASE",
  "PURCHASE_CANCELATION",
];

function submitRequest(
  data,
  url = getConfig("EVAT_API_URL")
) {
  return axios
    .post(url, data)
    .then((r) => {
      return r;
    })
    .catch((e) => {
      throw e;
    });
}

module.exports = {
  submitRequest,
  buildRequest,
};
