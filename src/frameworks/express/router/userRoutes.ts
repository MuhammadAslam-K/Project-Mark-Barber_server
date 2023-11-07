import Express from 'express';
import userSaloanController from '../../../adapters/controllers/user/userSaloanController';
import userPersonalServicesController from '../../../adapters/controllers/user/userPersonalServicesController';

const user_route = Express.Router()

user_route.post("/saloan/nearest", userSaloanController.getNearestSaloan)
user_route.get("/saloan/all", userSaloanController.getAllSaloan)


user_route.post("/personalServices/nearest", userPersonalServicesController.getNearestPersonalServices)
user_route.get("/personalServices/all", userPersonalServicesController.getAllPersonalServices)



export default user_route
