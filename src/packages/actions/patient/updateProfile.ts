"use server"

import { Patient } from "@prisma/client"
import db from "../../../db"
import getUserFromToken from "./getUserFromToken"

export const updateProfile = async ({ token, imgPath, dob, gender, age, mobile, address, bloodGroup, maritalStatus, note }: (Omit<Patient, 'userId'> & { token: string })) => {
    try {
        const user: any = await getUserFromToken({ token });
        const updatedPatient = await db.patient.upsert({
            where: { userId: user?.id },
            update: {
                imgPath,
                dob,
                gender,
                age: age,
                mobile: mobile,
                address,
                bloodGroup,
                maritalStatus,
                note
            },
            create: {
                userId: user.id,
                imgPath,
                dob,
                gender,
                age: age,
                mobile: mobile,
                address,
                bloodGroup,
                maritalStatus,
                note
            }
        });
        console.log("Patient updated succeessfully", updatedPatient);

        return {
            message: "User updated",
            user: { ...user, ...updatedPatient }
        }
    } catch (error: any) {

        console.log("Error:= ", error.message);
        return {
            error: "Failed to update the patient infomation"
        }
    }
}