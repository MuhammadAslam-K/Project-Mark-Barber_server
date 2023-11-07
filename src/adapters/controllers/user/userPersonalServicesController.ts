import { Request, Response } from 'express';
import userPersonalServicesUseCase from '../../../business/use-cases/user/userPersonalServicesUseCase';


export default {
    getNearestPersonalServices: async (req: Request, res: Response) => {
        try {
            res.json(await userPersonalServicesUseCase.getNearByPersonalServices(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    getAllPersonalServices: async (req: Request, res: Response) => {
        try {
            res.json(await userPersonalServicesUseCase.getAllPersonalServices())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}