"use server"

import { Review } from "@prisma/client"
import db from "../../../db"
import getUserFromToken from "../patient/getUserFromToken"


export const addReview = async ({ token, doctorId, comment, rating, title }: (Review & { token: string })) => {
    try {
        const user: any = await getUserFromToken({ token });
        const review = await db.review.create({
            data: {
                comment,
                rating,
                title,
                patientId: user.id,
                doctorId: typeof doctorId === "number" ? doctorId : parseInt(doctorId)
            }
        });
        console.log("Appointment created successfully", appointment);

        return {
            message: "Appointment created successfully",
            appointment
        }
    } catch (error: any) {

        console.log("Error:= ", error.message);
        return {
            error: "Failed to create appointment"
        }
    }
}