/**
 * @swagger
 *  components:
 *    schemas:
 *      ColorDto:
 *        type: object
 *        required:
 *          - name
 *          - color
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 *          color:
 *            type: string
 *          pantone:
 *            type: string
 *          year:
 *            type: integer
 *        example:
 *           id: 1
 *           name: Sand Dollar
 *           color: #DECDBE
 *           pantone: 13-1106
 *           year: 2000
 */
let ColorDto = {
    "_id": "_id",
    "id": "id",
    "name": "name",
    "color": "color",
    "pantone": "pantone",
    "year": "year"
};
module.exports = ColorDto;