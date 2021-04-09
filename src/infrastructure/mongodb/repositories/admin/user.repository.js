const BaseRepository = require("../base.repository");

class UserRepo extends BaseRepository {
  constructor({ dbmongo }) {
    super(dbmongo, "users");
  }
  getByUsername(username) {
    const products = this.dbmongo.getAll(this.entity, { username: username } , {});
    return products;
  }
}
module.exports = UserRepo;