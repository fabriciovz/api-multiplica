const BaseRepository = require("../base.repository");

class ColorRepository extends BaseRepository {
  constructor({ dbmongo }) {
    super(dbmongo, "colors");
  }
}
module.exports = ColorRepository;
