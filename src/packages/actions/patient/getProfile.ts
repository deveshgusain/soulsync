"use server"

import db from "../../../db"
import getUserFromToken from "./getUserFromToken";


export const getProfile = async ({ token }: { token: string }) => {
    try {
        // Fetch User details
        const user = await getUserFromToken({ token })

        // Fetch Profile Details
        const profile = await db.patient.findUnique({
            where: {
                userId: user?.id
            }
        })

        // Fetch appointments details
        const appointments = await db.appointment.findMany({
            where: {
                patientId: user?.id,
                date  : {
                    gte : new Date()
                }
            },
            include: {
                doctor: {
                    select: {
                        imgPath: true,
                        speciality: true,
                        user: {
                            select: {
                                firstName: true,
                                lastName: true,

                            }
                        }
                    }
                }
            },
            orderBy : {
                bookingDate : "desc"
            }
        })

        // Fetch reviews details
        const totalReviews = await db.review.count({
            where: {
                patientId: user?.id
            }
        })

        return {
            ...user, ...profile, appointments: appointments, totalReviews
        }
    } catch (error: any) {

        return {
            error: "Failed to fetch the patient infomation"
        }
    }
}