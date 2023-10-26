import { ObjectId } from "mongoose"
import staffRepositoryGetQuery from "../../repository/staffRepository/staffRepositoryGetQuery"
import encriptionDecription from "../../services/encriptionDecription"

export default {
    login: async (data: { email: string, password: string }) => {
        try {
            const staffExistes = await staffRepositoryGetQuery.getStaffWithEmail(data.email)
            if (staffExistes) {
                const checkPassword = await encriptionDecription.comparePassword(data.password, staffExistes.password)
                if (checkPassword) {
                    if (staffExistes.adminApproved) {
                        if (staffExistes.blocked) {
                            throw new Error("Your Account had been blocked by Admin")
                        } else {
                            const token = encriptionDecription.createToken(staffExistes._id as ObjectId, "staff", "5h");
                            return token
                        }
                    } else {
                        throw new Error("Admin had not been approved your request")
                    }
                } else {
                    throw new Error("Incorrect Email or Password")
                }
            }
            else {
                throw new Error("This Email is not Registered")
            }
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}