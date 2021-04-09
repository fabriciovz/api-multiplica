const { Router } = require("express");
const queryHandler = require("../../middlewares/query.middleware");

/**
 * @swagger
 * tags:
 *   - name: color
 *     description: Endpoints
 */
module.exports = function ({ ColorController }) {
  const router = Router();
  /**
   * @swagger
   * /colores:
   *   get:
   *     description: Listar todos los elementos usando paginación
   *     parameters:
   *       - in: query
   *         name: page
   *         schema:
   *           type: integer
   *         description: El número de página correspondiente al conjunto de elementos a listar
   *       - in: query
   *         name: limit
   *         schema:
   *           type: integer
   *         description: El número de elementos a retornar
   *       - in: query
   *         name: sort
   *         schema:
   *           type: string
   *         description: El campo de la tabla como base del ordenamiento
   *       - in: query
   *         name: dir
   *         schema:
   *           type: string
   *           enum: [ASC, DESC]
   *         description: La dirección del ordenamiento
   *     tags:
   *        - color
   *     security:
   *        - bearerAuth: []
   *     responses:
   *       200:
   *         description: Elementos listados
   */
  router.get(
    "/",
    queryHandler(),
      ColorController.get.bind(ColorController)
  );
  /**
   * @swagger
   * /colores/all:
   *   get:
   *     description: Listar todos los elementos sin paginación
   *     security:
   *        - bearerAuth: []
   *     tags:
   *        - color
   *     responses:
   *       200:
   *         description: Elementos listados
   *
   */
  router.get(
    "/all",
    queryHandler(),
      ColorController.getAll.bind(ColorController)
  );
  /**
   * @swagger
   * /colores/{id}:
   *   get:
   *     description: Listar un elemento
   *     security:
   *        - bearerAuth: []
   *     tags:
   *        - color
   *     parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: integer
   *          required: true
   *          description: Id numérico del elemento a listar
   *     responses:
   *       200:
   *         description: Elemento listada
   *
   */
  router.get("/:id", ColorController.getOne.bind(ColorController));
  /**
   * @swagger
   * /colores:
   *   post:
   *     description: Crear un elemento
   *     security:
   *        - bearerAuth: []
   *     requestBody:
   *        description: Contenido del body
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ColorDto'
   *     tags:
   *        - color
   *     responses:
   *       201:
   *         description: Elemento creado
   *
   */
  router.post("/", ColorController.create.bind(ColorController));
  /**
   * @swagger
   * /colores/{id}:
   *   put:
   *     description: Actualizar un elemento
   *     security:
   *        - bearerAuth: []
   *     parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: integer
   *          required: true
   *          description: Id numérico del elemento a actualizar
   *     tags:
   *        - color
   *     requestBody:
   *        description: Contenido del body
   *        required: true
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/ColorDto'
   *     responses:
   *       200:
   *         description: Elemento actualizado
   *
   */
  router.put("/:id", ColorController.update.bind(ColorController));
  /**
   * @swagger
   * /colores/{id}:
   *   delete:
   *     description: Eliminar un elemento permanentemente
   *     security:
   *        - bearerAuth: []
   *     parameters:
   *        - in: path
   *          name: id
   *          schema:
   *            type: integer
   *          required: true
   *          description: Id numérico del elemento a eliminar
   *     tags:
   *        - color
   *     responses:
   *       200:
   *         description: Elemento eliminado
   *
   */
  router.delete("/:id", ColorController.delete.bind(ColorController));

  return router;
};
