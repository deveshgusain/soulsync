"use server"

import crypto from "crypto";
import jwt from "jsonwebtoken";

import { User } from "@prisma/client"
import db from "../../../db"

import dotenv from 'dotenv';
dotenv.config();

async function hash(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(8).toString("hex")

        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(salt + ":" + derivedKey.toString('hex'))
        });
    })
}

type registerType = Omit<User, 'id' | 'createdDate'> & { password: string };

export const register = async ({ firstName, lastName, email, password, role }: registerType) => {
    try {
        const passwordhash = await hash(password);

        const user = await db.user.create({
            data: {
                firstName, lastName, email, role,
                password: {
                    create: {
                        hash: passwordhash
                    }
                }
            }
        });

        const secret = process.env.JWT_SECRET;

        const jwtToken = jwt.sign({ id: user.id }, secret || "")

        return {
            message: "User Created",
            jwtToken,
            userId: user.id
        }
    } catch (error: any) {

        console.log("Error:= ", error.message);
        return {
            error: "Failed to create the user"
        }
    }
}