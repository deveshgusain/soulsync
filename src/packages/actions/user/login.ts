"use server"

import crypto from "crypto";
import jwt from "jsonwebtoken";

import db from "../../../db"

import dotenv from 'dotenv';
dotenv.config();


async function verify(password: string, hash: string) {
    return new Promise((resolve, reject) => {
        const [salt, key] = hash.split(":")
        crypto.scrypt(password, salt, 64, (err, derivedKey) => {
            if (err) reject(err);
            resolve(key == derivedKey.toString('hex'))
        });
    })
}

export async function login({ email, password }: { email: string, password: string }) {
    try {
        const passwordhash = await db.userPassword.findFirst({
            where: {
                user: {
                    email: {
                        equals: email
                    }
                }
            }
        });
        
        const checkPassword = await verify(password, passwordhash?.hash || "");

        if (!checkPassword) throw new Error("Password didn't matched");

        const secret = process.env.JWT_SECRET;
        const jwtToken = jwt.sign({ email: email }, secret || "")

        return {
            message: "Logged in successfully",
            jwtToken
        }
    } catch (error: any) {
        return {
            error: "Enter correct credential"
        }
    }
}