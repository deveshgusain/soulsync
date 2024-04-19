import Jwt from "jsonwebtoken";
import db from "../../../db"

export default async function ({ token }: { token: string }) {
    const secret = process.env.JWT_SECRET;
    let decode: any = Jwt.verify(token, secret || "");
    console.log("Decoded: ", decode.email);

    const user = await db.user.findFirst({
        where: {
            email: {
                equals: decode.email
            }
        },
    });
    return user;
}