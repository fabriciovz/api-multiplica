//Libraries
const { Router } = require("express");
const cors = require("cors");
const compression = require("compression");
const express = require("express");
const swaggerUi = require("swagger-ui-express");

//Middlewares
const {
  logErrors,
  wrapErrors,
  clientErrorHandler,
} = require("../middlewares/error.middleware");


// Swagger set up
const swaggerSpec = require('../../swagger/swagger.js').spec();

module.exports = function ({ ColorRoutes}) {
  const router = Router();
  const apiRoute = Router();

  // middlewares
  apiRoute.use(cors()).use(express.json()).use(compression());

  // Routes
  apiRoute.use(
    "/colores",
      ColorRoutes
  );

  // swagger
  apiRoute.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      explorer: true,
    })
  );

  // //Para el manejo de rutas no establecidas/errores al escribir las rutas
  // apiRoute.get("*", function (req, res, next) {
  //   console.log("por aqui");
  //   next(boom.notFound("Ruta no encontrada"));
  // });

  // error handlers
  apiRoute.use(logErrors);
  apiRoute.use(wrapErrors);
  apiRoute.use(clientErrorHandler);

  router.use("/api", apiRoute);


  return router;
};
