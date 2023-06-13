import express          from 'express';
import cors             from 'cors';
import { CORS_OPTIONS } from './constants';
import { dogRouter }    from './routers/dog.router';
import { dogsRouter }   from './routers/dogs.router';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.options('*', cors(CORS_OPTIONS));
app.use(cors(CORS_OPTIONS));

app.get('/ping', (req, res, next) => {
	res.json('Dogshouseservice.Version1.0.1');
});

app.use('/dog', dogRouter);

app.use('/dogs', dogsRouter);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at port:${port}!`);
});