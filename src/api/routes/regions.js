const Router = require("express");
const router = new Router();

const controller = require('../controllers/regionsController')

router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.create)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete);

router.get('/:id/locations', controller.getLocations)

module.exports = router