const objectMapper = require('object-mapper');

class BaseUsecase {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this.entityToMap = entityToMap;
  }

  async get(query,options) {
    const entities = await this._entityRepository.get(query,options);
     const mapped = entities.map((entity) => {
      return objectMapper(entity, this.entityToMap);
    });
    return mapped;
  }

  async getAll(query, options) {
    const entities = await this._entityRepository.getAll(query,options);
    return entities.map((entity) => {
      return objectMapper(entity, this.entityToMap);
    });
  }
  async getByID(id) {
    const entity = await this._entityRepository.getByID(id);
    if (!entity) return null;
    return objectMapper(entity, this.entityToMap);
  }

  async create(entity) {
    entity = objectMapper(entity, this.entityToMap);
    const createdEntity = await this._entityRepository.create(entity);
    return createdEntity
  }

  async update(id, entity) {
    entity = objectMapper(entity, this.entityToMap);
    const updatedEntity = await this._entityRepository.update(id, entity);
    return updatedEntity;
  }
  async delete(id) {
    return await this._entityRepository.delete(id);
  }

}
module.exports = BaseUsecase;
