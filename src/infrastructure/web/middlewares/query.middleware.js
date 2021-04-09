function queryHandler() {
  return function (req, res, next) {
    let options = {};

    let limit;
    let page;
    let sort;

    //Page assing
    if ("page" in req.query && "limit" in req.query) {
      page = parseInt(req.query.page);
      limit = parseInt(req.query.limit);
      const skip = (page - 1) * limit; //startIndex

      options.limit = limit;
      options.skip = skip;
    } 

    //Page assing
    if ("sort" in req.query && "dir" in req.query) {
      sort = req.query.sort;
      dir = req.query.dir;

      const arr = [];
      arr[sort] = dir;

      options.sort = {[sort]: parseInt(dir)};

    } 

    req.paging=options;
    next();
  };
}

module.exports = queryHandler;
