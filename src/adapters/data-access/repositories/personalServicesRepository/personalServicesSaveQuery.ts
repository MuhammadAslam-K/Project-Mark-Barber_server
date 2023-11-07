import { personaServices } from "../../../../business/interfaces/StaffInterfaces"
import PersonalServicesSchema from "../../models/personalServices"

export default {
    addNewPersonalService: async (data: personaServices, staff_Id: string) => {
        console.log("data", data)
        try {
            const person = new PersonalServicesSchema({
                ...data,
                personalLocation: data.location,
                location: {
                    type: 'Point',
                    coordinates: [data.personLongitude, data.personLatitude],
                },
                images: [data.Image1, data.Image2, data.Image3, data.Image4],
                staff_Id,
            })
            return await person.save()
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}