import Express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import * as functions from "firebase-functions"


import connect from '../frameworks/database/mongoDB';
import jwtTokenAuth from '../frameworks/express/middlewares/jwtTokenAuth';
import staff_router from '../frameworks/express/router/staffRoutes';
import admin_router from '../frameworks/express/router/adminRoutes';
import user_route from '../frameworks/express/router/userRoutes';


dotenv.config();

// const port = process.env.PORT;
const port = 8000
// const MONGO_URL = process.env.MONGO_URL;
const MONGO_URL ="mongodb+srv://markbarbercoin:markbarber@cluster0.cmxse7y.mongodb.net/markbarber?retryWrites=true&w=majority"
const app = Express();
app.use(Express.json({ limit: '10mb' }));

app.use(cors({
    origin: 'https://markbarber.in',
    credentials: true,
}))

app.use(jwtTokenAuth.validateToken);

app.use('/', user_route)
app.use("/staff", staff_router)
app.use("/admin", admin_router)


if (MONGO_URL) {
    connect(MONGO_URL).then(() => {
        app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
    }).catch((err) => {
        console.error('MongoDB connection error:', err);
    });
} else {
    console.log('Cannot access the URL from environment');
}
