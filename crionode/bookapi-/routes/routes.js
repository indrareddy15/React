const Router = require("express");
const { createBook, getBooks, findBookByISBN, findBookByPriceAndCurrency } = require("../controllers/controllers");

const router = Router();

router.post("/create", createBook);
router.get("/all", getBooks);
router.get("/search", findBookByPriceAndCurrency);
router.get("/:ISBN", findBookByISBN);

module.exports = router;