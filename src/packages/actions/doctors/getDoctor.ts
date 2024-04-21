"use server"

import db from "../../../db"
export const getDoctor = async ({ doctorId }: { doctorId: number }) => {
    try {

        const doc = await db.doctor.findUnique({
            where:
            {
                userId: parseInt(doctorId.toString())
            },
            include:
            {
                awards: true,
                courses: true,
                experiences: true,
                skills: true,
                Review: {
                    include:
                    {
                        patient: {
                            select: {
                                imgPath: true,
                                user: {
                                    select: {
                                        firstName: true,
                                        lastName: true
                                    }
                                }
                            }
                        }
                    }
                }
            }

        });
        const user = await db.user.findUnique({ where: { id: doc?.userId } });
        if (!user) throw new Error(`Doctor not found with ID ${doc?.userId}`);
        const newDoc = { ...doc, 'name': `${user.firstName} ${user.lastName}` };

        return {
            doctor: newDoc
        }
    } catch (error: any) {
        return {
            error: "Failed to Fetch doctor list"
        }
    }
}