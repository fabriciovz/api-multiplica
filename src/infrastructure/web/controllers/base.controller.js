class BaseController {
  constructor(service) {
    this.service = service;
  }
  async get(req, res, next) {
    const options = req.paging;
    const query = {};
    let records = await this.service.get(query,options);
    return res.status(200).send({
      data: records,
      message: "Elementos Listados!!!",
    });
  }
  async getAll(req, res, next) {
    const options = req.paging;
    const query = {};
    let records = await this.service.getAll(query, options);
    return res.status(200).send({
      data: records,
      message: "Elementos Listados!!!",
    });
  }
  async getByID(req, res, next) {
    const { id } = req.params;
    console.log("en el controller getByID");
    console.log(id);
    console.log(req.params);
    let record = await this.service.getByID(id);
    if (!record) {
      return res.status(404).send({
        message: "Elemento no encontrado!!!",
      });
    }
    return res.status(200).send({
      data: record,
      message: "Elemento Listado!!!",
    });
  }
  async create(req, res, next) {
    const { body } = req;
    const created = await this.service.create(body);
    return res.status(201).send({
      data: created,
      message: "Elemento Creado",
    });
  }
  async update(req, res, next) {
    const { body } = req;
    const { id } = req.params;
    const record = await this.service.update(id, body);
    return res.status(200).send({
      data: record,
      message: "Elemento actualizado",
    });
  }
  async delete(req, res, next) {
    const { id } = req.params;
    await this.service.delete(id);
    return res.status(200).send({
      message: "Item eliminado",
    });
  }
}
module.exports = BaseController;
