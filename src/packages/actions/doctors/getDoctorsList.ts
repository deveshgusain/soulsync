"use server"

import db from "../../../db"
export const getDoctorList = async () => {
    try {
        const docs = await db.doctor.findMany({
            orderBy: {
                Review: {
                    _count: "desc"
                }
            }
        });
        const newDocs = await Promise.all(docs.map(async doc => {
            const user = await db.user.findUnique({ where: { id: doc.userId } });
            if (!user) throw new Error(`Doctor not found with ID ${doc.userId}`);
            return { ...doc, 'name': `${user.firstName} ${user.lastName}` };
        }));
        return {
            doctorList: newDocs
        }
    } catch (error: any) {

        return {
            error: "Failed to Fetch doctor list"
        }
    }
}