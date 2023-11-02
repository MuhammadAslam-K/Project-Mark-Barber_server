import Express from "express";
import adminAuthController from "../controllers/admin/adminAuthController";
import adminStaffsController from "../controllers/admin/adminStaffsController";
import adminDashboardController from "../controllers/admin/adminDashboardController";


const admin_router = Express.Router()

admin_router.post("/login", adminAuthController.login)

// STAFF
admin_router.get("/staffs/approved", adminStaffsController.getStaffs)

admin_router.patch("/staff/approve", adminStaffsController.approveStaff)
admin_router.patch("/staff/blockUnblock", adminStaffsController.blockUnblockStaff)

// DASHBOARD
admin_router.get("/dashboard", adminDashboardController.getDashboardData)

export default admin_router