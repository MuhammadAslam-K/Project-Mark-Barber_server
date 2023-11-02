import { Request, Response } from "express"
import adminStaffsUseCase from "../../../useCase/adminUseCase/adminStaffsUseCase"


export default {
    getStaffs: async (req: Request, res: Response) => {
        try {
            res.json(await adminStaffsUseCase.getStaffs())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },


    approveStaff: async (req: Request, res: Response) => {
        try {
            const staffId = req.query.id as string
            res.json(await adminStaffsUseCase.approveStaff(staffId))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    blockUnblockStaff: async (req: Request, res: Response) => {
        try {
            const staffId = req.query.id as string
            res.json(await adminStaffsUseCase.blockUnblockStaff(staffId))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}