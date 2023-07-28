const getPagination = (page, pageSize) => {
  if (!page && !pageSize) {
    return { limit: null, offset: null };
  } else {
    const limit = +pageSize;
    const offset = page <= 1 ? 0 * limit : (page - 1) * limit;
    return { limit, offset };
  }
};


module.exports = {
    getPagination
}