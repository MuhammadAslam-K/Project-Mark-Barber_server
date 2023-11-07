import Express from "express";
import adminAuthController from "../../../adapters/controllers/admin/adminAuthController";
import adminStaffsController from "../../../adapters/controllers/admin/adminStaffsController";
import adminDashboardController from "../../../adapters/controllers/admin/adminDashboardController";
import adminPersonalServiceController from "../../../adapters/controllers/admin/adminPersonalServiceController";
import adminShopController from "../../../adapters/controllers/admin/adminShopController";


const admin_router = Express.Router()

admin_router.post("/login", adminAuthController.login)

// STAFF
admin_router.get("/staffs/approved", adminStaffsController.getStaffs)

admin_router.patch("/staff/approve", adminStaffsController.approveStaff)
admin_router.patch("/staff/blockUnblock", adminStaffsController.blockUnblockStaff)

// DASHBOARD
admin_router.get("/dashboard", adminDashboardController.getDashboardData)

// PERSONAL SERVICES
admin_router.get("/personalServiceDetails", adminPersonalServiceController.getAllpersonalServices)

// SHOP
admin_router.get("/shopesDetails", adminShopController.getAllShopes)

export default admin_router