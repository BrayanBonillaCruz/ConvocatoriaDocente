// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import userController from './user.controller';

// Importando factory de validación
import ValidateFactory from '../../services/validateFactory';
// Importando el validador de proyectos
import userValidator from './user.validator';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/user/login'
router.get('/login', userController.login);
// GET '/user/home'
router.get('/logout', userController.logout);
// GET '/user/register
router.get('/register', userController.register);
// POST "/user/register"
router.post(
  '/register',
  ValidateFactory({
    schema: userValidator.registerSchema,
    getObject: userValidator.getRegister,
  }),
  userController.addPost
);

// Exporto este tramo de ruta
export default router;
