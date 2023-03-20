const healthCheck = require("../../utils/health-check");

const router = require("express").Router();

router.get("/", healthCheck);

module.exports = router;
