const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1> &#10060; 404 ERROR! &#10060; </h1>');
});

module.exports = router;