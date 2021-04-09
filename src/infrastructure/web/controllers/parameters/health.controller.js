class HealthController {
    constructor() {
    }
    async get(req, res, next) {
        return res.status(200).send({
            status: 'up',
            message: 'Im Healthy'
        });
    }
}
module.exports = HealthController;