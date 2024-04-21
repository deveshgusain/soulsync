"use server"
import Jwt from "jsonwebtoken";
import db from "../../../db"

export default async function ({ token }: { token: string }) {
    try {
        const secret = process.env.JWT_SECRET;
        let decode: any = Jwt.verify(token, secret || "");

        const user = await db.user.findFirst({
            where: {
                email: {
                    equals: decode.email
                }
            },
        });
        return user;
    } catch (error: any) {
        return {
            error: error.message
        }
    }

}