const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./profile-routes.js');


router.use('/users', userRoutes);
router.use('/plants', postRoutes);


module.exports = router;