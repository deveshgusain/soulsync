"use server"

import db from "../../../db"
export const getDocAppointments = async ({ doctorId, date }: { doctorId: string, date: Date }) => {
    try {
        const appointments = await db.appointment.findMany({
            where: {
                date: {
                    gte: new Date(date.toISOString().split('T')[0]), // Greater than or equal to input date
                    lt: new Date(new Date(date.toISOString().split('T')[0]).getTime() + 24 * 60 * 60 * 1000), // Less than next day
                },
                doctorId: parseInt(doctorId)
            },
        });
        const hours = appointments.map((appointment: any) => {
            const hour = appointment.date.getHours();

            return hour > 12 ? hour - 12 : hour;
        });
        
        return {
            hours
        }
    } catch (error: any) {
        return {
            error: "Failed to Fetch appointments"
        }
    }
}