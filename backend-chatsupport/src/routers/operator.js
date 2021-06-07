const express = require('express');
const { catchErrors } = require("../handlers/errorHandlers");
const router = express.Router();
const routerController = require('../controllers/operator');


router.post('/add-operator', catchErrors(routerController.registerOperator));
router.post('/login-operator', catchErrors(routerController.login));

module.exports = router;