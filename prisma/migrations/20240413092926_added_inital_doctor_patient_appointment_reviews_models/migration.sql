-- CreateEnum
CREATE TYPE "Status" AS ENUM ('New', 'Confirm', 'Failure', 'Completed');

-- CreateTable
CREATE TABLE "Doctor" (
    "userId" INTEGER NOT NULL,
    "imgPath" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "totalRating" INTEGER NOT NULL,
    "speciality" TEXT NOT NULL,
    "specialitySummary" TEXT NOT NULL,
    "educationSumamry" TEXT NOT NULL,
    "experienceSumamry" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Course" (
    "userId" INTEGER NOT NULL,
    "collegeName" TEXT NOT NULL,
    "courseName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Award" (
    "userId" INTEGER NOT NULL,
    "awardName" TEXT NOT NULL,
    "awardYear" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "userId" INTEGER NOT NULL,
    "institution" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "userId" INTEGER NOT NULL,
    "skill" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Patient" (
    "userId" INTEGER NOT NULL,
    "imgPath" TEXT NOT NULL,
    "dob" TEXT,
    "gender" TEXT,
    "age" INTEGER,
    "mobile" INTEGER,
    "address" TEXT,
    "bloodGroup" TEXT,
    "maritalStatus" TEXT,
    "note" TEXT
);

-- CreateTable
CREATE TABLE "Appointment" (
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" INTEGER NOT NULL,
    "doctorNote" TEXT NOT NULL,
    "newPatient" BOOLEAN NOT NULL,
    "gender" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'New'
);

-- CreateTable
CREATE TABLE "Review" (
    "doctorId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "comment" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_userId_key" ON "Doctor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_userId_key" ON "Course"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Award_userId_key" ON "Award"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userId_key" ON "Experience"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_userId_key" ON "Skill"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_userId_key" ON "Patient"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_mobile_key" ON "Patient"("mobile");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_doctorId_key" ON "Appointment"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_patientId_key" ON "Appointment"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_doctorId_key" ON "Review"("doctorId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_patientId_key" ON "Review"("patientId");

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Award" ADD CONSTRAINT "Award_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
