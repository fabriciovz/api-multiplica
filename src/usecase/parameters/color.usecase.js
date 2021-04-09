const BaseUsecase = require("../base.usecase");
const ColorDto = require("../../domain/model/parameters/color.dto");

class ColorUsecase extends BaseUsecase {
  constructor({ ColorRepository }) {
    super(ColorRepository, ColorDto);
  }
}
module.exports = ColorUsecase;
