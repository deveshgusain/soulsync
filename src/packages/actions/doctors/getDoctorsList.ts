"use server"

import db from "../../../db"
export const getDoctorList = async () => {
    try {
        const docs = await db.doctor.findMany();
        const newDocs = await Promise.all(docs.map(async doc => {
            const user = await db.user.findUnique({ where: { id: doc.userId } });
            if (!user) throw new Error(`Doctor not found with ID ${doc.userId}`);
            return { ...doc, 'name': `${user.firstName} ${user.lastName}` };
        }));
        return {
            doctorList: newDocs
        }
    } catch (error: any) {

        console.log("Failed to Fetch doctor list \nError:= ", error.message);
        return {
            error: "Failed to Fetch doctor list"
        }
    }
}