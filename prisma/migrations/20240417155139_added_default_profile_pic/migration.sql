-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "imgPath" SET DEFAULT '/default-user.png';

-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "imgPath" DROP NOT NULL,
ALTER COLUMN "imgPath" SET DEFAULT '/default-user.png';
