"use server"

import { Appointment } from "@prisma/client"
import db from "../../../db"
import getUserFromToken from "../patient/getUserFromToken"


export const postAppointment = async ({ token, amount, bookingDate, doctorId, doctorNote, gender, newPatient }: (Omit<Appointment, 'date' | 'patientId' | 'status' | 'appointment'> & { token: string })) => {
    try {
        const user: any = await getUserFromToken({ token });
        const currentDate = new Date();
        const appointment = await db.appointment.create({
            data: {
                amount,
                date: currentDate,
                doctorNote,
                gender: gender ,
                newPatient,
                bookingDate: (new Date(bookingDate)),
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