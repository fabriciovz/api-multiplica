const ColorDto = require("../../../../domain/model/parameters/color.dto");
const BaseController = require("../base.controller");

class ColorController extends BaseController {
  constructor({ ColorUsecase }) {
    super(ColorUsecase,ColorDto);
  }
}

module.exports = ColorController;
