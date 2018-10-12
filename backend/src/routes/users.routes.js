import express from 'express';
import usersController from '../controllers/users.controller';
import session from '../handlers/session.handler';

const router = express.Router(); 

router.get('/', session, usersController.fetchAll);
router.post('/', usersController.addNew);

export default router;