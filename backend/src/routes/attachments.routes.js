import express from 'express';
import attachmentsController from '../controllers/attachments.controller';
import uploader from '../handlers/uploader.handler';
import imgResizer from '../handlers/image.handler';

const router = express.Router(); 

router.post('/', uploader, imgResizer, attachmentsController.addNew);

export default router;