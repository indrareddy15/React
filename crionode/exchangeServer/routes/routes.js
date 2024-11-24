const Router = require("express");
const { getAllCurrencies, getCurriencyConversion } = require("../controllers/controllers");

const router = Router();


router.get("/currencies", getAllCurrencies)
router.get("/convert", getCurriencyConversion)

module.exports = router;