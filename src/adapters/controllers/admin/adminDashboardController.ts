import { Request, Response } from "express"
import adminDashboardUseCase from "../../../business/use-cases/adminUseCase/adminDashboardUseCase"


export default {
    getDashboardData: async (req: Request, res: Response) => {
        try {
            res.json(await adminDashboardUseCase.getDashboardData())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}