// const passport = require("passport");
const { BasicStrategy } = require("passport-http");
const { Strategy, ExtractJwt } = require("passport-jwt");
const { config } = require("../../../../shared/config");

const bcrypt = require("bcrypt");
const boom = require("@hapi/boom");

class PassportStrategy {
  constructor() {
  }
  //basic
  getBasicStrategy() {
    return new BasicStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true,
      },
      async function (req, username, password, cb) {
        try {
          const service = req._userUsecase;
            service.getByUsername(username)
                        .then(async (user) => {
                          if (user.length === 0) {
                            return cb(boom.unauthorized(), false);
                          }
                          if (!(await bcrypt.compare(password, user.password))) {
                            return cb(boom.unauthorized(), false);
                          }
                          console.log("luego de la validación");
                          return cb(null, user);
                        })
                        .catch((err) => {
                          console.log(err);
                          cb(error);
                        });
        } catch (error) {
          return cb(error);
        }
      }
    );
  }
  //Jwt
  getJwtStrategy() {
    //Primer parámetro el objeto Strategy con sus opciones
    return new Strategy(
      {
        secretOrKey: config.AUTH_JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        passReqToCallback: true

      },
      //callback
      async function (req,tokenPayload, cb) {
        try {
          const service = req._userUsecase;
          const username = tokenPayload.sub;
          service
            .getByUsername(username )
            .then(async (user) => {
              if (user.length === 0) {
                return cb(boom.unauthorized(), false);
              }
              // if (!(await bcrypt.compare(password, user[0].password))) {
              //   console.log("por aqui no auto");
              //   return cb(boom.unauthorized(), false);
              // }
              return cb(null, user);
            })
            .catch((err) => {
              console.log(err);
              cb(err);
            });
        } catch (error) {
          return cb(error);
        }
      }
    );
  }
}
module.exports = PassportStrategy;