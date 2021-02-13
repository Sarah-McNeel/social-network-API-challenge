const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");
const reactionRoutes = require("./reaction-routes");

// add prefixes /users /thought/ reaction to routes
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/reactions", reactionRoutes);

module.exports = router;
