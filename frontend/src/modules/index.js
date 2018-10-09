import { ORM } from 'redux-orm';
import { User } from './users/model';
import { Boat } from './boats/model';
import { Category } from './categories/model';

export const entities = new ORM();
entities.register(User, Boat, Category);

export default entities;