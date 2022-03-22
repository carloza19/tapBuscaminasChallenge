const express = require("express");
const router = express.Router();

const {show , create}  = require("../controllers/partidasController");

router.get("/:id", show);
router.post("/crear", create);

module.exports = router;
