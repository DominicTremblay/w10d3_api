import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import movieRouter from './routers/movieRouter';
import actorRouter from './routers/actorRouter';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import { authenticate } from './auth/index';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ msg: 'API Home' });
});

app.use('/api/v1/movies', authenticate, movieRouter);
app.use('/api/v1/actors', actorRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/login', loginRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
