const XLSX = require("xlsx");
const fs = require("fs");
const axios = require("axios");

module.exports = {
  async readExcelSheet(url) {
    const excelFileUrl = url;
    var response;

    try {
      response = await axios.get(excelFileUrl, {
        responseType: "arraybuffer",
      });
    } catch (err) {
      //   console.log(err);
      return err;
    }
    const excelData = Buffer.from(response.data, "binary");

    // Read the Excel data
    const workbook = XLSX.read(excelData, { type: "buffer" });

    // Get the first sheet (you can also specify a specific sheet name or index)
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to a JSON object
    const data = XLSX.utils.sheet_to_json(sheet, {
      header: ["pincode"],
      defval: "",
      range: 1,
    });
    const pincodes = data.map((row) => row);
    return pincodes;

    // Print the JSON data
  },
};
