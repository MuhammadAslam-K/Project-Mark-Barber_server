import Express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';


import connect from './config/mongoDB';


dotenv.config();

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = Express();
app.use(cors());
app.use(Express.json({ limit: '10mb' }));

const allowedOrigins = [process.env.FRONT_END];
app.use(
    cors({
        origin: function (origin: any, callback: any) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    }
    )
)
// app.use(jwtTokenAuth.validateToken);



if (MONGO_URL) {
    connect(MONGO_URL).then(() => {
        app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
} else {
    console.log('Cannot access the URL from environment');
}
