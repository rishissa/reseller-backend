const generateInteraktBody = (data) => {
  const imageFormats = /(png|jpg|jpeg|gif|bmp|svg)/i;
  let templateName = data.template;
  let image;
  if (data.headerText === undefined || data.headerText === null) {
    image = data.containsImage === true ? data.image : null;
  } else {
    image = data.headerText;
  }

  if (image !== null && imageFormats.test(image)) {
    const parts = image.split(".");
    const lastPart = parts.pop();
    const restOfTheParts = parts.join(".");

    image = restOfTheParts + ".jpeg";
  }

  if (data.phoneNumber == null) {
    console.log("No Phone Number");

    return "No Phone Number";
  } else {
    var phone = data.phoneNumber.toString().slice(-10);
  }

  let dataAPI = {
    countryCode: "+91" /* required */,

    phoneNumber: phone /* required */,

    type: "Template" /* required */,

    callbackData:
      "some_callback_data" /* optional string with max length 512 */,

    template: {
      name: templateName /* required */,

      languageCode: "en" /* required */,

      headerValues: [image],

      bodyValues: [...data.body],
    },
  };

  switch (templateName) {
    case "send_otp":
      delete dataAPI.template.headerValues;
      break;

    default:
      break;
  }

  return dataAPI;
};

module.exports = { generateInteraktBody };
