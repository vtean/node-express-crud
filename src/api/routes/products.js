const Router = require("express");
const router = new Router();

const controller = require("../controllers/ProductsController");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

router.get("/category/:categoryId", controller.getAllOfCategory);

module.exports = router;
