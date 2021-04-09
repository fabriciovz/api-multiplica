const boom = require("@hapi/boom");
const { config } = require("../../../shared/config");

function withErrorStack(err, stack) {
  //desarrollo
  if (config.dev) {
    return { ...err, stack }; // Object.assign({}, err, stack)
  }
  //producción
  else {
    return { ...err }; // Object.assign({}, err, stack)
  }
}

function logErrors(err, req, res, next) {
  console.log("Error middelware #1");
  next(err);
}

function wrapErrors(err, req, res, next) {
  console.log("Error middelware #2");

  if (!err.isBoom) {
    console.log("No es de boom");
    next(boom.badImplementation(err));
  }
  console.log("Error de boom");

  next(err);
}

function clientErrorHandler(err, req, res, next) {
  console.log("Error middelware #3");
  const {
    output: { statusCode, payload },
  } = err;
  // catch errors for AJAX request or if an error ocurrs while streaming
  res.status(statusCode).json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  clientErrorHandler
};
