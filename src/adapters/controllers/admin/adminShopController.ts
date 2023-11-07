import { Request, Response } from "express"
import adminShopeUseCase from "../../../business/use-cases/adminUseCase/adminShopeUseCase"


export default {
    getAllShopes: async (req: Request, res: Response) => {
        try {
            res.json(await adminShopeUseCase.getAllShopes())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}