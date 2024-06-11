const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const greetRouter = require("./greet/router");
const programRouter = require("./programs/router");

router.use("/items", itemsRouter);
router.use("/greet", greetRouter);
router.use("/programs", programRouter);

/* ************************************************************************* */

module.exports = router;
