import mongoose from 'mongoose';
import config from '../config';
import User from './users.model';
import Boat from './boats.model';
import Category from './categories.model';

mongoose.connect(`mongodb://${config.db.host}/${config.db.name}`, { 
  useNewUrlParser: true 
});
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
	if (err) throw err;
});

export default { mongoose, 
	models: {
		User,
		Boat,
		Category
	}
};