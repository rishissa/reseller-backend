const extendDate = (date, type, addDateCount) => {
  const dateCopy = new Date(date);
  switch (type) {
    case "hrs":
      dateCopy.setHours(dateCopy.getHours() + addDateCount);
      break;

    case "min":
      dateCopy.setMinutes(dateCopy.getMinutes() + addDateCount);
      break;

    case "month":
      dateCopy.setMonth(dateCopy.getMonth() + addDateCount);
      break;

    case "days": 
        dateCopy.setDate(dateCopy.getDate() + addDateCount);
        break;

    case "year":
      dateCopy.setFullYear(dateCopy.getFullYear() + addDateCount);
      break;

    default:
      break;
  }

  return dateCopy;
};

const formatDate = (date2) => {
  const date = new Date(date2);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
}



module.exports = {
  extendDate,
  formatDate
};
