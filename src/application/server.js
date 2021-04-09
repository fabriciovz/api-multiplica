const express = require("express");

class Server {
  constructor({ config, router }) {
    this._config = config.config;
    this._express = express();
    this._express.use(router);
  }
  getApp(){
    return this._express;
  }
  getConfig(){
    return this._config;
  }
}
module.exports = Server;
