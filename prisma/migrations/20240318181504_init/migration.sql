-- CreateEnum
CREATE TYPE "UserPermissionRole" AS ENUM ('PATIENT', 'DOCTOR', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "role" "UserPermissionRole" NOT NULL DEFAULT 'PATIENT',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPassword" (
    "hash" TEXT NOT NULL,
    "userId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPassword_userId_key" ON "UserPassword"("userId");

-- AddForeignKey
ALTER TABLE "UserPassword" ADD CONSTRAINT "UserPassword_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
