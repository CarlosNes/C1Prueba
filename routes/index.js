const { Router } = require('express');
const userController = require('../controllers/userController'); // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas para usuarios
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = (app) => {
    app.use('/', router);
};
