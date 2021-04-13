class BaseRepository {
  constructor(dbmongo, entity ) {
    this.dbmongo = dbmongo;
    this.entity = entity;
  }
  //Get elements with paging
  get(query,options) {
    return this.dbmongo.getAll(this.entity, query, options);
  }

  //Get all elements from a collection
  getAll(query, options) {
    const products = this.dbmongo.getAll(this.entity, query ,options);
    return products;
  }
  //Get one element by Id
  getByID(id) {
    return this.dbmongo.getByID(this.entity,id);
  }
  create(entity) {
    delete entity._id;
    return this.dbmongo.create(this.entity, entity);
  }
  //Update an element by Id
  update(id, entity) {
    //Se elimina de la actualización el campo _id ya que es inmutable
    delete entity._id;
    return this.dbmongo.update(this.entity, id, entity); 
  }
  //Delete an element by Id
  delete(id) {
    return this.dbmongo.delete(this.entity, id );
  }
}
module.exports = BaseRepository;


