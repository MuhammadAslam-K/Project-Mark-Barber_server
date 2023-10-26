"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    login: async (req, res) => {
        try {
            res.json(await staffLoginUseCase.login());
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
