const crypto = require("crypto");

function generateRandomSlug(productName) {
  // Split the product name into words
  const removeSpecialChars = (str) => str.replace(/[^\w\s]/gi, "");

  const sanitizedProductName = removeSpecialChars(productName);
  const words = sanitizedProductName.split(" ");

  // Initialize the prefix with the first letters of the words
  let prefix = "";
  for (let i = 0; i < 3; i++) {
    if (i < words.length) {
      prefix += words[i].charAt(0).toUpperCase();
    } else {
      // If there are no more words, fill the remaining prefix with "X"
      prefix += "X";
    }
  }

  // Generate 6 random hex characters
  const hexChars = crypto.randomBytes(4).toString("hex").toUpperCase();

  // Combine the prefix and hex characters with an underscore
  const slug = `${prefix}_${hexChars}`;

  return slug;
}

module.exports = {
  genProdSlug: generateRandomSlug,
};
