const router = require('express');

const noteRoutes = require('./notes');

router.use('/notes', noteRoutes);

module.exports = router;
