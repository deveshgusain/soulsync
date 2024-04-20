"use server"

import crypto from "crypto";
import jwt from "jsonwebtoken";

import db from "../../../db"

import dotenv from 'dotenv';
import getUserFromToken from "../patient/getUserFromToken";
import { User } from "@prisma/client";
import { hash } from "./hashPassword";
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

export async function changePassword({ token, oldPassword, newPassword }: { token: string, oldPassword: string, newPassword: string }) {
    try {
        const user: User | null = await getUserFromToken({ token });
        const passwordhash = await db.userPassword.findMany({
            where: {
                user: {
                    id: user?.id
                }
            }
        });
        const checkPassword = await verify(oldPassword, passwordhash[0].hash || "");

        if (!checkPassword) throw new Error("Wrong Password");

        const newHash = await hash(newPassword);

        const reponse = await db.userPassword.update({
            where: {
                userId: user?.id
            },
            data: {
                hash: newHash
            }
        })

        return {
            message: "Password changed successfully",
        }
    } catch (error: any) {
        console.log("correct credential:- " , error.message);
        return {
            error: "Enter correct credential"
        }
    }
}