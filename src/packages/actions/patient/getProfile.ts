"use server"

import Jwt from "jsonwebtoken";
import db from "../../../db"
import getUserFromToken from "./getUserFromToken";


export const getProfile = async ({ token }: { token: string }) => {
    try {
        // Fetch User details
        const user = await getUserFromToken({ token })
        console.log("User details:= ", user);

        // Fetch Profile Details
        const profile = await db.patient.findUnique({
            where: {
                userId: user?.id
            }
        })
        console.log("Profile details:= ", profile);

        // Fetch appointments details
        const appointments = await db.appointment.findMany({
            where: {
                patientId: user?.id
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
            }
        })


        console.log("Appointments details:= ", appointments);
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

        console.log("Error:= ", error.message);
        return {
            error: "Failed to update the patient infomation"
        }
    }
}