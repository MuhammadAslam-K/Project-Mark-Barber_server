import * as dotenv from 'dotenv';
import encriptionDecription from '../../../adapters/external-services/encriptionDecription';

dotenv.config();


export default {
    validateAdmin: async (data: { email: string, password: string }) => {
        try {
            const adminEmail = process.env.ADMIN_EMAIL
            const adminPassword = process.env.ADMIN_PASSWORD

            if (data.email == adminEmail && data.password == adminPassword) {
                const token = encriptionDecription.createToken(data.email, "admin", "5h");
                return token
            } else {
                throw new Error("Unautherized")
            }
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}