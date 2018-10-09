import express from 'express';
import boatsController from '../controllers/boats.controller';

const router = express.Router(); 

router.get('/', boatsController.fetchAll);
router.get('/:id', boatsController.getSelected);
router.post('/', boatsController.addNew);
router.put('/:id', boatsController.update);

export default router;