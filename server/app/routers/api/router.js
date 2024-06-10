const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

router.get("/", (req, res) => {
  res.send("Welcome to wild series!");
});

/* ************************************************************************* */

module.exports = router;
