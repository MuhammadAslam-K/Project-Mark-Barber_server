import { Request, Response } from "express"
import adminLoginUseCase from "../../../useCase/adminUseCase/adminLoginUseCase"


export default {
    login: async (req: Request, res: Response) => {
        try {
            res.json(await adminLoginUseCase.validateAdmin(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}