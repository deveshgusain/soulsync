/*
  Warnings:

  - A unique constraint covering the columns `[doctorId,date]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Appointment_date_key";

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_doctorId_date_key" ON "Appointment"("doctorId", "date");
