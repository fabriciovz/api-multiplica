const BaseUsecase = require("../base.usecase");
const UserDto = require("../../domain/model/admin/user.dto");
const objectMapper = require('object-mapper');

class UserUsecase extends BaseUsecase {
  constructor({ UserRepo }) {
    super(UserRepo, UserDto);
  }
  async getByUsername(username) {
    const entity = await this._entityRepository.getByUsername(username);
    if (!entity) return null;
    return objectMapper(entity, this.entityToMap)
  }
}
module.exports = UserUsecase;