"use server"

import { Patient } from "@prisma/client"
import db from "../../../db"
import getUserFromToken from "./getUserFromToken"

export const updateProfile = async ({ token, imgPath, dob, gender, age, mobile, address, bloodGroup, maritalStatus, note, firstName, lastName, email }: (Omit<Patient, 'userId'> & { token: string, firstName: string, lastName: string, email: string })) => {
    try {
        let user: any = await getUserFromToken({ token });
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
        
        if(user.firstName !== firstName || user.lastName !== lastName || user.email !== email ) {
            user = await db.user.update({
                where  : {
                    id : user.id
                }, 
                data  :{
                    firstName,
                    lastName,
                    email
                }
            })
        }

        return {
            message: "User updated",
            user: { ...user, ...updatedPatient }
        }
    } catch (error: any) {

        console.log("Failed to update the patient infomation \nError:= ", error.message);
        return {
            error: "Failed to update the patient infomation"
        }
    }
}