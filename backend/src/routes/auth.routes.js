import express from 'express';
import authController from '../controllers/auth.controller';
import isAuth from '../handlers/session.handler';

const router = express.Router(); 

router.post('/login', authController.login);
router.delete('/logout', isAuth, authController.logout);
router.get('/me', isAuth, authController.authenticate);

export default router;