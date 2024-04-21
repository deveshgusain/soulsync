"use server"

import { Review } from "@prisma/client"
import db from "../../../db"
import getUserFromToken from "../patient/getUserFromToken"


export const addReview = async ({ token, doctorId, comment, rating, title }: (Omit<Review, 'patientId' | 'reviewId' | 'createdDate'> & { token: string })) => {
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

        await db.doctor.update({
            where: {
                userId: doctorId
            },
            data: {
                totalFeedback: { increment: 1 },
                totalRating: { increment: rating }
            }
        })

        return {
            message: "Review added successfully",
        }
    } catch (error: any) {

        return {
            error: "Failed to create review"
        }
    }
}