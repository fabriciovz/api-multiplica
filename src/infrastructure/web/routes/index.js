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

module.exports = function ({ ColorRoutes, HealthRoutes}) {
  const router = Router();
  const apiRoute = Router();
  const healthRoute = Router();

  // middlewares
  apiRoute.use(cors()).use(express.json()).use(compression());
  healthRoute.use("/health",HealthRoutes);


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

  // error handlers
  apiRoute.use(logErrors);
  apiRoute.use(wrapErrors);
  apiRoute.use(clientErrorHandler);

  router.use("/api", apiRoute);

  //HealthCheck
  router.use(healthRoute);

  //Para el manejo de rutas no establecidas/errores al escribir las rutas
  router.get("*", function (req,res,err) {
    res.status(404).json("page not found");
  });

  return router;
};
