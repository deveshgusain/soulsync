"use client"
import getUserFromToken from "../patient/getUserFromToken";

export async function checkUser() {
    try {
        const token = localStorage.getItem('token');
        const response: any = await getUserFromToken({ token: token || "" });
        if (response.error) throw new Error(response.error);
        return {
            status: "Authorized",
            firstName: response.firstName
        }
    } catch (error: any) {
        return {
            status: "Not Authorized",
            message: error.message
        }
    }
}