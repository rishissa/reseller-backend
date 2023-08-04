const path = require("path");
const fs = require("fs/promises");
const Mustache = require("mustache");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const header = require("../mailTemplates/header");
const header_otp = require("../mailTemplates/header_otp");
const items = require("../mailTemplates/items");
const subtotal = require("../mailTemplates/subtotal");
const address = require("../mailTemplates/address");
const order_details = require("../mailTemplates/order_details");
const shipped_details = require("../mailTemplates/shipped_details");
const notes = require("../mailTemplates/note");
const body = require("../mailTemplates/body");
const otp_body = require("../mailTemplates/otp_body");

async function renderEmail(templateName) {
  const templatesDir = path.join(__dirname, "../mailTemplates/html");
  const templatePath = path.join(templatesDir, templateName);
  const rawTemplate = (await fs.readFile(templatePath)).toString();

  return rawTemplate;
}

async function customizationHTML(data) {
  const customizeHeader = () => {
    const view = { orderid: data.orderid, status: data.order_status };
    const htmlHeader = Mustache.render(header, view);
    return htmlHeader;
  };

  const customizeNotes = () => {
    const view = {
      message: data.message,
    };
    const htmlNotes = Mustache.render(notes, view);
    return htmlNotes;
  };

  const customizeBody = () => {
    const view = {
      name: data.consumerName,
      message: data.message,
    };
    const htmlBody = Mustache.render(body, view);
    return htmlBody;
  };

  const customizeItems = () => {
    let itemsHTML = "";
    let dataProds = [];
    for (const prod of data.order_products.products) {
      dataProds.push(prod);
    }
    console.log(dataProds);
    for (let i = 0; i < dataProds.length; i++) {
      itemsHTML += Mustache.render(items, dataProds[i]);
    }
    return itemsHTML;
  };

  const customizeSubtotal = () => {
    const view = {
      subtotal: data.priceBreakdown.subtotal,
      gst: data.priceBreakdown.gst,
      total: data.priceBreakdown.total,
    };
    const htmlTotal = Mustache.render(subtotal, view);
    return htmlTotal;
  };

  const customizeAddress = () => {
    const view = data.address;

    const htmlTotal = Mustache.render(address, view);
    return htmlTotal;
  };

  const customizeOrderDetails = () => {
    const view = {
      orderid: data.orderid,
      status: data.status,
      date: data.date,
    };
    const htmlDetails = Mustache.render(order_details, view);
    return htmlDetails;
  };

  return {
    customizeHeader,
    customizeNotes,
    customizeBody,
    customizeItems,
    customizeSubtotal,
    customizeAddress,
    customizeOrderDetails,
  };
}

async function customizationOTPEmail(data) {
  const customizeHeader = () => {
    const view = {};
    const htmlHeader = Mustache.render(header_otp, view);
    return htmlHeader;
  };

  const customizeBody = () => {
    const view = {
      name: "User",
      message: data.message,
      note: `<p style="width:100%;margin-top:0;margin-right:0;margin-bottom:15px;margin-left:0;padding-top:0;padding-right:0;
      padding-bottom:0;padding-left:0;font-size:12px;line-height:1.29;color:#202020">
      <b>Note: This OTP will be expired at ${data.expiry}</b></p>`,
    };
    const htmlBody = Mustache.render(body, view);
    return htmlBody;
  };

  const customizeotpBody = () => {
    const view = {
      otp: data.otp,
    };
    const htmlBody = Mustache.render(otp_body, view);
    return htmlBody;
  };

  return {
    customizeHeader,
    customizeBody,
    customizeotpBody,
  };
}

async function customizeOrdersEmail(data) {
  const html = await renderEmail("mail.html");
  const customizedFunc = await customizationHTML(data);

  const view = {
    header: customizedFunc.customizeHeader,
    items: customizedFunc.customizeItems,
    subtotal: customizedFunc.customizeSubtotal,
    address: customizedFunc.customizeAddress,
    order_details: customizedFunc.customizeOrderDetails,
    body: customizedFunc.customizeBody,
    notes: customizedFunc.customizeNotes,
  };

  const customized = Mustache.render(html, view);

  return customized;
}

async function customizeOtpEmail(data) {
  const html = await renderEmail("otp.html");
  const customizedFunc = await customizationOTPEmail(data);

  const view = {
    header: customizedFunc.customizeHeader,
    body: customizedFunc.customizeBody,
    otp_body: customizedFunc.customizeotpBody,
  };

  const customized = Mustache.render(html, view);

  return customized;
}

async function customizeOrderShipped(data) {
  const html = await renderEmail("mail.html");
  const customizedFunc = await customizationShippedEmail(data);

  const view = {
    header: customizedFunc.customizeHeader,
    items: customizedFunc.customizeItems,
    subtotal: customizedFunc.customizeSubtotal,
    address: customizedFunc.customizeAddress,
    order_details: customizedFunc.customizeOrderDetails,
    body: customizedFunc.customizeBody,
    notes: customizedFunc.customizeNotes,
  };

  const customized = Mustache.render(html, view);

  return customized;
}

async function customizationShippedEmail(data) {
  const customizeHeader = () => {
    const view = { orderid: data.orderid, status: data.order_status };
    const htmlHeader = Mustache.render(header, view);
    return htmlHeader;
  };

  const customizeNotes = () => {
    const view = {
      message: data.message,
    };
    const htmlNotes = Mustache.render(notes, view);
    return htmlNotes;
  };

  const customizeBody = () => {
    const view = {
      name: data.consumerName,
      message: data.message,
    };
    const htmlBody = Mustache.render(body, view);
    return htmlBody;
  };

  const customizeItems = () => {
    let itemsHTML = "";
    let dataProds = [];
    for (const prod of data.order_products.products) {
      dataProds.push(prod);
    }
    console.log(dataProds);
    for (let i = 0; i < dataProds.length; i++) {
      itemsHTML += Mustache.render(items, dataProds[i]);
    }
    return itemsHTML;
  };

  const customizeSubtotal = () => {
    const view = {
      subtotal: data.priceBreakdown.subtotal,
      gst: data.priceBreakdown.gst,
      total: data.priceBreakdown.total,
    };
    const htmlTotal = Mustache.render(subtotal, view);
    return htmlTotal;
  };

  const customizeAddress = () => {
    const view = data.address;

    const htmlTotal = Mustache.render(address, view);
    return htmlTotal;
  };

  const customizeOrderDetails = () => {
    const view = {
      orderid: data.orderid,
      shippingName: data.shippingName,
      status: data.status,
      date: data.date,
      trackingId: data.trackingId,
      courier_image: data.courier_image,
    };
    const htmlDetails = Mustache.render(shipped_details, view);
    return htmlDetails;
  };

  return {
    customizeHeader,
    customizeNotes,
    customizeBody,
    customizeItems,
    customizeSubtotal,
    customizeAddress,
    customizeOrderDetails,
  };
}

module.exports = {
  mailServer: async (data) => {
    let html;
    if (data.status === "Shipped") {
      console.log("Into Shipped Mail");
      html = await customizeOrderShipped(data);
    } else {
      html = await customizeOrdersEmail(data);
    }

    await strapi.plugin("email").service("email").send({
      to: data.email,
      from: "noreply@orderr.app",
      subject: data.subject,
      text: data.subject,
      html: html,
    });
  },

  otpMailServer: async (data) => {
    const html = await customizeOtpEmail(data);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "orderr.app.365@gmail.com",
        clientId:
          "6083299360-e37n65d0hjfdq5kf4qnfei5lga459ak0.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken:
          "1//04njlQR5ZYv2vCgYIARAAGAQSNwF-L9Iriem4dcjvMySetBfJoCRoMKrKXBdTjeaO7k3vCrAk2zk1KojRlAC2YnDobI2TJga3vgI",
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Orderr App <orderr.app.365@gmail.com>",
      to: data.email,
      subject: data.subject,
      text: data.subject,
      html: html,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("mail error", err);
        return { message: err };
      } else {
        console.log("mail success", info.response);
        return { status: true };
      }
    });
    transport.close();
  },
};
