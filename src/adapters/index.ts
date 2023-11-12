import Express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';


import connect from '../frameworks/database/mongoDB';
import jwtTokenAuth from '../frameworks/express/middlewares/jwtTokenAuth';
import staff_router from '../frameworks/express/router/staffRoutes';
import admin_router from '../frameworks/express/router/adminRoutes';
import user_route from '../frameworks/express/router/userRoutes';


dotenv.config();

const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = Express();
// app.use(cors());
app.use(Express.json({ limit: '10mb' }));

app.use(cors({
    origin: '*',
    credentials: true,
}));


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

export default app