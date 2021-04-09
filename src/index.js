const container = require("./infrastructure/awilix/container");

const server = container.resolve("server");

server.getApp().listen(server.getConfig().PORT, (obj) => {
  console.log("Application running on port " + server.getConfig().PORT);
});
