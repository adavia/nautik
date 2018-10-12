import mongoose from 'mongoose';

const attachmentsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number, 
  },
  url: {
    original: {
      type: String,
      required: true
    },
    small: {
      type: String,
      required: true
    }
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // Instead of a hardcoded model name in `ref`, `refPath` means Mongoose
    // will look at the `onModel` property to find the right model.
    refPath: 'onModel'
  },
  entityType: {
    type: String,
    required: true,
    enum: ['boat']
  }
});

const Attachment = mongoose.model('Attachment', attachmentsSchema);

export default Attachment;