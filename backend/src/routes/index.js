import express from 'express';
import authRoutes from './auth.routes';
import usersRoutes from './users.routes';
import boatsRoutes from './boats.routes';
import categoriesRoutes from './categories.routes';

import isAuth from '../handlers/session.handler';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', usersRoutes);
router.use('/boats', isAuth, boatsRoutes);
router.use('/categories', isAuth, categoriesRoutes);

router.get('/', (req, res) => {
  res.status(200).send('Welcome to the home page');
});

export default router;