"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    getTotalCount: async () => {
        try {
            return 5;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
};
