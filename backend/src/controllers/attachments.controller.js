import db from '../models';

const { Attachment } = db.models;

class AttachmentsController {
  async addNew(req, res, next) {
    const files = req.files.map(file => {
      return {
        name: file.filename,
        size: file.size,
        url: { 
          original: file.path,
          small: `src/public/thumbs/small/${file.filename}`
        },
        entityId: req.query.id,
        entityType: req.query.entity
      }
    })

    try {
      const attachments = await Attachment.insertMany(files);
      res.status(201).send(attachments);
    } catch(err) { next(err) }
  }
}

const attachmentsController = new AttachmentsController();
export default attachmentsController;