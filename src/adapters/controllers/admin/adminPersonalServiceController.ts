import { Request, Response } from "express"
import adminPersonalServicesUseCase from "../../../business/use-cases/adminUseCase/adminPersonalServicesUseCase"


export default {
    getAllpersonalServices: async (req: Request, res: Response) => {
        try {
            res.json(await adminPersonalServicesUseCase.getAllpersonalServices())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}