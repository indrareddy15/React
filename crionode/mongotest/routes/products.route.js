const Router = require('express');
const { createProduct, getProductById, getAllProducts, updateProductById, deleteProductById, } = require('../controllers/products.controller');

const router = Router();


router.post("/new", createProduct);

router.get("/", getAllProducts);

router.route("/:id").get(getProductById).patch(updateProductById).delete(deleteProductById);

// router.get("/:id", getProductById)
// router.patch("/:id", updateProductById)
// router.delete("/:id", deleteProductById)



module.exports = router;