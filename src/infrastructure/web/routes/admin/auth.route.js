const { Router } = require("express");

/**
 * @swagger
 * tags:
 *   - name: auth
 *     description: Endpoints
 */
module.exports = function ({ AuthController }) {
  const router = Router();
  /**
   * @swagger
   * /auth/token:
   *   post:
   *     description: Login aplicación
   *     security:
   *     - basicAuth: [] 
   *     tags:
   *        - auth
   *     produces:
   *       - application/json
   *
   *     responses:
   *       200:
   *         description: login - respuesta satisfactoria
   */
  router.post("/token", AuthController.login.bind(AuthController));
  return router;
};