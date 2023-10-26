import Express from "express";
import staffAuthController from "../controllers/staff/staffAuthController";
import staffShopController from "../controllers/staff/staffShopController";
import staffDashboardController from "../controllers/staff/staffDashboardController";

const staff_router = Express.Router()

staff_router.post("/login", staffAuthController.login)
staff_router.post("/signup", staffAuthController.signUp)

// DASHBOARD
staff_router.get("/dashboard", staffDashboardController.getDashboardData)

// SHOPE
staff_router.post("/shop/add", staffShopController.addNewShop)
staff_router.get("/shopeDetails", staffShopController.getShopeDetails)

export default staff_router