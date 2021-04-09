const { Router } = require("express");
/**
 * @swagger
 * tags:
 *   - name: color
 *     description: Endpoints
 */
module.exports = function ({ HealthController }) {
  const router = Router();
  /**
   * @swagger
   * /health:
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
      HealthController.get.bind(HealthController)
  );

  return router;
};
