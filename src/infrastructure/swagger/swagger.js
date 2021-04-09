const swaggerJSDoc = require("swagger-jsdoc");
const { config } = require("../../shared/config");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Back-End",
      version: "1.0.0",
      description:
        "Descripción de EndPoints que conforman el Back-End",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Back-End",
        url: "",
        email: "",
      },
    },
    basePath: "/",
    produces: ["application/json"],
    consumes: ["application/json"],
    servers: [
      {
        url: `http://localhost:${config.PORT}/api/`,
      },
    ],
  },
  apis: ["./**/*route.js", "./**/*dto.js"],

};

module.exports = {
  spec() {
    return swaggerJSDoc(options);
  },
};

