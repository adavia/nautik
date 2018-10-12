import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
	destination: (req, file, next) => {
		next(null, './src/public/uploads');
	},
	filename: (req, file, next) => {
		const fileName = `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`;
		next(null, fileName);
	}
});

const uploader = multer({ storage: storage }).array('attachments');

export default uploader;