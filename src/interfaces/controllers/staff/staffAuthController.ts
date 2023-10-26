import { Request, Response } from "express"
import staffLoginUseCase from "../../../useCase/staffUseCase/staffLoginUseCase"
import staffSignupUseCase from "../../../useCase/staffUseCase/staffSignupUseCase"

export default {
    login: async (req: Request, res: Response) => {
        try {
            res.json(await staffLoginUseCase.login(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },

    signUp: async (req: Request, res: Response) => {
        try {
            res.json(await staffSignupUseCase.signUp(req.body))
        } catch (error) {
            res.status(500).json({ error: (error as Error).message })
        }
    },
}