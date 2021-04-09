function addHandler(userUsecase) {
  return function (req, res, next) {
    req._userUsecase = userUsecase;
    next();
  };
}
module.exports = addHandler;
