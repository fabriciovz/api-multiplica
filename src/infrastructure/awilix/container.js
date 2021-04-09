const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const Server = require("../../application/server");
const config = require("../../shared/config");

// // routes
const Routes = require("../web/routes");
const ColorRoutes = require("../web/routes/parameters/color.route");
const HealthRoutes = require("../web/routes/parameters/health.route");
const AuthRoutes = require("../web/routes/admin/auth.route");


// // controllers
const {
  ColorController,
    HealthController,
    AuthController
} = require("../web/controllers");

// usecase
const { ColorUsecase, UserUsecase } = require("../../usecase");

// repositories
const { ColorRepository, UserRepo } = require("../mongodb/repositories");

// db
const dbmongo = require("../mongodb/connection/mongo");

const container = createContainer();

container
  .register({
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
      //controllers
    ColorController: asClass(ColorController).singleton(),
      HealthController: asClass(HealthController).singleton(),
      AuthController: asClass(AuthController).singleton(),
      //routes
      ColorRoutes: asFunction(ColorRoutes).singleton(),
      HealthRoutes: asFunction(HealthRoutes).singleton(),
      AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    dbmongo: asValue(dbmongo),
  })
  .register({
    ColorRepository: asClass(ColorRepository).singleton(),
      UserRepo: asClass(UserRepo).singleton(),
  })
  .register({
      ColorUsecase: asClass(ColorUsecase).singleton(),
    UserUsecase: asClass(UserUsecase).singleton(),
  });

module.exports = container;
