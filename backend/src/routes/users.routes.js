import express from 'express';
import usersController from '../controllers/users.controller';
import isAuth from '../handlers/session.handler';

const router = express.Router(); 

router.get('/', isAuth, usersController.fetchAll);
router.post('/', usersController.addNew);

export default router;