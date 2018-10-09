import mongoose from 'mongoose';

const boatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String, 
    index: true,
    unique: true
  },
  description: {
    type: String,
  },
  pricing: {
    retail: {
      type: Number,
      required: true,
      default: 0
    },
    sale: {
      type: Number
    }
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category'
  }]
});

boatSchema.pre('save', function(next) {
  const boat = this;
  if (!boat.isModified('name')) return next();
  boat.slug = boat.name
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');
  next();
});

const Boat = mongoose.model('Boat', boatSchema);

export default Boat;
