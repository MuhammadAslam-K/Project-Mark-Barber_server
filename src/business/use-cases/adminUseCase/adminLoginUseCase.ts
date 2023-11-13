import * as dotenv from 'dotenv';
import encriptionDecription from '../../../adapters/external-services/encriptionDecription';

dotenv.config();


export default {
    validateAdmin: async (data: { email: string, password: string }) => {
        try {
            // const adminEmail = process.env.ADMIN_EMAIL
            const adminEmail = "markbarber.co.in@gmail.com"
            // const adminPassword = process.env.ADMIN_PASSWORD
            const adminPassword = "Markbarber1998"

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