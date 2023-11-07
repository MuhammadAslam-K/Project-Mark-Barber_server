import Express from 'express';
import userSaloanController from '../../../adapters/controllers/user/userSaloanController';

const user_route = Express.Router()

user_route.post("/saloan/nearest", userSaloanController.getNearestSaloan)
user_route.get("/saloan/all", userSaloanController.getAllSaloan)


export default user_route
