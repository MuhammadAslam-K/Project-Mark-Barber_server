import { Request, Response } from "express"
import staffDashboardUseCase from "../../../useCase/staffUseCase/staffDashboardUseCase"


export default {
    getDashboardData: async (req: Request, res: Response) => {
        try {
            res.json(await staffDashboardUseCase.getStaffDashboardData(req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}