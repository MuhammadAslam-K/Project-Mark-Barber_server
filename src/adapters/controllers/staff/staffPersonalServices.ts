import { Request, Response } from 'express'
import staffPersonalServicesUseCase from '../../../business/use-cases/staffUseCase/staff-personalServicesUseCase'


export default {
    addNewPersonalService: async (req: Request, res: Response) => {
        try {
            res.json(await staffPersonalServicesUseCase.addNewPersonalService(req.body, req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    getPersonalServices: async (req: Request, res: Response) => {
        try {
            res.json(await staffPersonalServicesUseCase.getAllPersonalServicesByStaffId(req.token.data))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}