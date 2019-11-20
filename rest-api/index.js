const express = require('express');
const router = express.Router();
const apiRoutes = require("./routes/api");

// API Routes
router.use("/api", apiRoutes);

module.exports = router;