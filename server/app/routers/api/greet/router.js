const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const greet = require("../../../controllers/greetingsController");

// Route to get a list of items
router.get("/", greet);

/* ************************************************************************* */

module.exports = router;
