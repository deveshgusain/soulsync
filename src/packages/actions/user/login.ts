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
        const passwordhash = await db.userPassword.findMany({
            where: {
                user: {
                    email
                }
            }
        });
        const checkPassword = await verify(password, passwordhash[0].hash || "");

        if (!checkPassword) throw new Error("Password didn't matched");

        const secret = process.env.JWT_SECRET;
        const jwtToken = jwt.sign({ id: passwordhash[0].hash }, secret || "")

        return {
            message: "Logged in successfully",
            jwtToken
        }
    } catch (error: any) {
        console.log(error.message);
        return {
            error: "Enter correct credential"
        }
    }
}