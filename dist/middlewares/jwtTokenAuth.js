"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const encriptionDecription_1 = __importDefault(require("../services/encriptionDecription"));
exports.default = {
    validateToken: (req, res, next) => {
        try {
            const requestedRoute = req.path;
            console.log("path :", requestedRoute);
            const publicRoutes = [
                /**********  Driver **********/
                "/staff/login",
                "/staff/signup",
                /**********  Admin **********/
                "/admin/signUp",
                "/admin/login",
            ];
            if (publicRoutes.includes(requestedRoute)) {
                return next();
            }
            const authorizationHeader = req.header('Authorization');
            if (!authorizationHeader) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            const token = authorizationHeader.replace('Bearer ', '');
            const decodedToken = encriptionDecription_1.default.decryptdata(token);
            if (decodedToken.role === 'admin') {
                req.token = decodedToken;
                next();
            }
            else if (decodedToken.role === 'staff') {
                req.token = decodedToken;
                next();
            }
            else {
                return res.status(401).json({ error: 'Unauthorized' });
            }
        }
        catch (error) {
            console.log("error in jwt ", error);
            return res.status(401).json({ error: error.message });
        }
    },
};
