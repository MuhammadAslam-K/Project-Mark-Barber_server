import Express from "express";
import staffAuthController from "../controllers/staff/staffAuthController";

const staff_router = Express.Router()

staff_router.post("/login", staffAuthController.login)
staff_router.post("/signup", staffAuthController.signUp)

export default staff_router