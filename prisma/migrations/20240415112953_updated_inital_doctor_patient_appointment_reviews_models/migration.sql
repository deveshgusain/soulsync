/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Experience` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Skill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[reviewId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reviewId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Review_doctorId_key";

-- DropIndex
DROP INDEX "Review_patientId_key";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
ADD COLUMN     "courseId" SERIAL NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId");
DROP SEQUENCE "course_userid_seq";

-- AlterTable
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_pkey",
ADD COLUMN     "experienceId" SERIAL NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT,
ADD CONSTRAINT "Experience_pkey" PRIMARY KEY ("experienceId");
DROP SEQUENCE "experience_userid_seq";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "reviewId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_pkey",
ADD COLUMN     "skillId" SERIAL NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT,
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("skillId");
DROP SEQUENCE "skill_userid_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Review_reviewId_key" ON "Review"("reviewId");
