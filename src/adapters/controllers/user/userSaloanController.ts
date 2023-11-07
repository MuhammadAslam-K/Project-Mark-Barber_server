import { Request, Response } from 'express';
import userSaloanUseCase from '../../../business/use-cases/user/userSaloanUseCase';


export default {
    getNearestSaloan: async (req: Request, res: Response) => {
        try {
            res.json(await userSaloanUseCase.getNearbySaloan(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    getAllSaloan: async (req: Request, res: Response) => {
        try {
            res.json(await userSaloanUseCase.getAllSaloan())
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    }
}