/**
 * @swagger
 *  components:
 *    schemas:
 *      UserDto:
 *        type: object
 *        required:
 *          - username
 *          - email
 *        properties:
 *          username:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *        example:
 *           username: admin
 *           email: 123456
 */
let UserDto = {
  "_id": "_id",
  "id": "id",
  "username": "username",
  "password": "password",
  "email": "email",
};

module.exports = UserDto;
