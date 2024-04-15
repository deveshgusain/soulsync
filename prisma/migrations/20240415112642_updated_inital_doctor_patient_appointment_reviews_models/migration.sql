-- DropIndex
DROP INDEX "Appointment_doctorId_key";

-- DropIndex
DROP INDEX "Appointment_patientId_key";

-- DropIndex
DROP INDEX "Award_userId_key";

-- DropIndex
DROP INDEX "Course_userId_key";

-- DropIndex
DROP INDEX "Experience_userId_key";

-- DropIndex
DROP INDEX "Skill_userId_key";

-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "appointment" SERIAL NOT NULL,
ADD CONSTRAINT "Appointment_pkey" PRIMARY KEY ("appointment");

-- AlterTable
ALTER TABLE "Award" ADD COLUMN     "awardId" SERIAL NOT NULL,
ADD CONSTRAINT "Award_pkey" PRIMARY KEY ("awardId");

-- AlterTable
CREATE SEQUENCE course_userid_seq;
ALTER TABLE "Course" ALTER COLUMN "userId" SET DEFAULT nextval('course_userid_seq'),
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("userId");
ALTER SEQUENCE course_userid_seq OWNED BY "Course"."userId";

-- AlterTable
CREATE SEQUENCE experience_userid_seq;
ALTER TABLE "Experience" ALTER COLUMN "userId" SET DEFAULT nextval('experience_userid_seq'),
ADD CONSTRAINT "Experience_pkey" PRIMARY KEY ("userId");
ALTER SEQUENCE experience_userid_seq OWNED BY "Experience"."userId";

-- AlterTable
CREATE SEQUENCE skill_userid_seq;
ALTER TABLE "Skill" ALTER COLUMN "userId" SET DEFAULT nextval('skill_userid_seq'),
ADD CONSTRAINT "Skill_pkey" PRIMARY KEY ("userId");
ALTER SEQUENCE skill_userid_seq OWNED BY "Skill"."userId";
