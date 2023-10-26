import { Request, Response } from "express"
import adminStaffsUseCase from "../../../useCase/adminUseCase/adminStaffsUseCase"


export default {
    getApprovedStaffs: async (req: Request, res: Response) => {
        try {
            res.json(await adminStaffsUseCase.getApprovedStaffs())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    getNotApprovedStaffs: async (req: Request, res: Response) => {
        try {
            res.json(await adminStaffsUseCase.getNotApprovedStaffs())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    approveStaff: async (req: Request, res: Response) => {
        try {
            res.json(await adminStaffsUseCase.approveStaff(req.body.staffId))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    blockUnblockStaff: async (req: Request, res: Response) => {
        try {
            res.json(await adminStaffsUseCase.blockUnblockStaff(req.body.staffId))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}