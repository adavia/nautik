import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import morgan from 'morgan';

import config from './config';
import routes from './routes';
import session from './config/session';
import error from './handlers/error.handler';

const app = express();

app.use(morgan('combined'));

app.use(cors({
  credentials: true,
  origin: config.app.clientURL
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);
app.use(error);

app.listen(process.env.PORT || 3001, () => console.log('Listening to port 3001'));
