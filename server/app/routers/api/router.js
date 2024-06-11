const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const greetRouter = require("./greet/router");
const programRouter = require("./programs/router");
const categoryController = require("./category/router");

router.use("/items", itemsRouter);
router.use("/greet", greetRouter);
router.use("/programs", programRouter);
router.use("/categories", categoryController);

/* ************************************************************************* */

module.exports = router;
