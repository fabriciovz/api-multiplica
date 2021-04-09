const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../../../shared/config");

class MongoLib {
  constructor() {
    const url = `mongodb://${config.DB_USERM}:${config.DB_PASSWORDM}@${config.DB_HOSTM}`;
    this.client = new MongoClient(url, {
      useUnifiedTopology: true,
    });
    this.dbName = config.DB_NAMEM; //DB_NAMEM;
  }
  connect() {
    return new Promise((resolve, reject) => {
      this.client.connect((error) => {
        if (error) {
          reject(error);
        }
        console.log("Connected succesfully to mongo");
        resolve(this.client.db(this.dbName));
      });
    });
  }
  getAll(collection, query, paging) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query,paging).toArray();
    });
  }
  get(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }
  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }
  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }
  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

const dbmongo = new MongoLib();

module.exports = dbmongo;
