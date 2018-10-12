import express from 'express';
import authController from '../controllers/auth.controller';
import session from '../handlers/session.handler';

const router = express.Router(); 

router.post('/login', authController.login);
router.delete('/logout', session, authController.logout);
router.get('/me', session, authController.authenticate);

export default router;