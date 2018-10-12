import sharp from 'sharp';

export default (req, res, next) => {
  req.files.forEach(file => {
    sharp(file.path)
			.resize(100, 100)
			.toFile(`./src/public/thumbs/small/${file.filename}`, (err) => {
			if (err) {
				throw err;
			}
		});
  });

  next();
}