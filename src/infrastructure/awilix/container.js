const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const Server = require("../../application/server");
const config = require("../../shared/config");

// // routes
const Routes = require("../web/routes");
const ColorRoutes = require("../web/routes/parameters/color.route");

// // controllers
const {
  ColorController,
} = require("../web/controllers");

// usecase
const { ColorUsecase } = require("../../usecase");

// repositories
const { ColorRepository } = require("../mongodb/repositories");

// db
const dbmongo = require("../mongodb/connection/mongo");

const container = createContainer();

container
  .register({
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    ColorController: asClass(ColorController).singleton(),
    ColorRoutes: asFunction(ColorRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    dbmongo: asValue(dbmongo),

  })
  .register({
    ColorRepository: asClass(ColorRepository).singleton(),
  })
  .register({
      ColorUsecase: asClass(ColorUsecase).singleton(),
  });

module.exports = container;
