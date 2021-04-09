/**
 * @swagger
 *  components:
 *    schemas:
 *      UserLoginDto:
 *        type: object
 *        required:
 *          - username
 *          - password
 *        properties:
 *          username:
 *            type: string
 *          password:
 *            type: string
 *        example:
 *           username: admin
 *           password: 123456
 */
let UserLoginDto = {
    "username": "username",
    "password": "password",
};
module.exports = UserLoginDto;
