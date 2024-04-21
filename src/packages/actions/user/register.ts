"use server"

import jwt from "jsonwebtoken";

import { User } from "@prisma/client"
import db from "../../../db"

import dotenv from 'dotenv';
import { hash } from "./hashPassword";
dotenv.config();

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

        const jwtToken = jwt.sign({ email: user.email }, secret || "")

        return {
            message: "User Created",
            jwtToken,
            userId: user.id
        }
    } catch (error: any) {

        return {
            error: "Failed to create the user"
        }
    }
}