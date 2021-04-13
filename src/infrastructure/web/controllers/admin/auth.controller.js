// JWT strategy
require("../../auth/strategies/passport-strategy");
const passport = require("passport");
const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { config } = require("../../../../shared/config");

//Passport Basic Strategy
const PassportStrategy = require("../../auth/strategies/passport-strategy");
const basic = new PassportStrategy(passport);
passport.use(basic.getBasicStrategy());
//
class AuthController {
  constructor() {
  }
  async login(req, res, next) {
    passport.authenticate("basic", function (error, user) {
      try {
        if (error || !user) {
          next(boom.unauthorized());
        }
        req.login(user, { session: false }, async function (error) {
          if (error) {
            next(error);
          }
          // por estandard el username se almacena en sub en el caso del payload jwt
          // Se incorpora la información del usuario
          if(user.username!=undefined) {
            const payload = {sub: user.username, email: user.email, id: user.id};
            //Creación de token
            const token = jwt.sign(payload, config.AUTH_JWT_SECRET, {
              algorithm: config.AUTH_JWT_ALGORITHM,
              expiresIn: config.AUTH_JWT_LIFETIME,
            });
            return res.status(200).json({access_token: token});
          }
          else {
            next(boom.unauthorized());
          }

        });
      } catch (error) {
        console.log("en el catch del error de auth controller");
        next(error);
      }
    })(req, res, next);
  }
}
module.exports = AuthController;
