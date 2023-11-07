import Express from "express";
import staffAuthController from "../../../adapters/controllers/staff/staffAuthController";
import staffShopController from "../../../adapters/controllers/staff/staffShopController";
import staffDashboardController from "../../../adapters/controllers/staff/staffDashboardController";
import staffPersonalServices from "../../../adapters/controllers/staff/staffPersonalServices";

const staff_router = Express.Router()

staff_router.post("/login", staffAuthController.login)
staff_router.post("/signup", staffAuthController.signUp)

// DASHBOARD
staff_router.get("/dashboard", staffDashboardController.getDashboardData)

// SHOPE
staff_router.post("/shop/add", staffShopController.addNewShop)
staff_router.get("/shopeDetails", staffShopController.getShopeDetails)

// PESRSONAL-SERVICE
staff_router.post("/personalService/add", staffPersonalServices.addNewPersonalService)
staff_router.get("/personalServiceDetails", staffPersonalServices.getPersonalServices)


export default staff_router