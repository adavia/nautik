import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String, 
    index: true,
    unique: true
  }
}, { 
  toObject: { 
    virtuals: true 
  }, 
  toJSON: { 
    virtuals: true 
  }
});

categorySchema.pre('save', function(next) {
  const category = this;
  if (!category.isModified('name')) return next();
  category.slug = category.name
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');
  next();
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
