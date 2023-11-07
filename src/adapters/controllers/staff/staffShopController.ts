import { Request, Response } from "express"
import staffShopeUseCase from "../../../business/use-cases/staffUseCase/staffShopeUseCase"



export default {
    addNewShop: async (req: Request, res: Response) => {
        try {
            res.json(await staffShopeUseCase.addNewShop(req.body, req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    getShopeDetails: async (req: Request, res: Response) => {
        try {
            res.json(await staffShopeUseCase.getShopeWithStaffId(req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}