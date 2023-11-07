import { NextFunction, Request, Response } from 'express';
import encriptionDecription from '../../../adapters/external-services/encriptionDecription';


export default {

    validateToken: (req: Request, res: Response, next: NextFunction) => {
        try {
            const requestedRoute = req.path;
            console.log("path :", requestedRoute)
            const publicRoutes = [
                /**********  User **********/
                "/saloan/nearest",
                "/saloan/all",
                /**********  Driver **********/
                "/staff/login",
                "/staff/signup",

                /**********  Admin **********/
                "/admin/signUp",
                "/admin/login",

            ]

            if (publicRoutes.includes(requestedRoute)) {
                return next();
            }

            const authorizationHeader = req.header('Authorization');

            if (!authorizationHeader) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            const token = authorizationHeader.replace('Bearer ', '');

            const decodedToken = encriptionDecription.decryptdata(token)

            if (decodedToken.role === 'admin') {
                req.token = decodedToken
                next();
            } else if (decodedToken.role === 'staff') {

                req.token = decodedToken
                next();
            }
            else {
                return res.status(401).json({ error: 'Unauthorized' });
            }

        }
        catch (error) {
            console.log("error in jwt ", error)
            return res.status(401).json({ error: (error as Error).message });

        }

    },

}
