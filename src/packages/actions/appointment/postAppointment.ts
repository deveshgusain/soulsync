"use server"

import { Appointment } from "@prisma/client/edge";
import db from "../../../db"
import getUserFromToken from "../patient/getUserFromToken"


export const postAppointment = async ({ token, amount, bookingDate, time, doctorId, doctorNote, gender, newPatient }: (Omit<Appointment, 'date' | 'patientId' | 'status' | 'appointment'> & { token: string, time: string })) => {
    try {
        const user: any = await getUserFromToken({ token });
        const date = new Date(bookingDate);

        time = time.substring(0, 2);
        
        parseInt(time) <= 5 ? date.setHours(12 + parseInt(time)) : date.setHours(parseInt(time));
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        

        const appointment = await db.appointment.create({
            data: {
                amount,
                date,
                doctorNote,
                gender: gender,
                newPatient,
                patientId: user.id,
                doctorId: typeof doctorId === "number" ? doctorId : parseInt(doctorId)
            }
        });

        return {
            message: "Appointment created successfully",
            appointment
        }
    } catch (error: any) {

        console.log("Failed to create appointment \nError:= ", error.message);
        return {
            error: "Failed to create appointment"
        }
    }
}