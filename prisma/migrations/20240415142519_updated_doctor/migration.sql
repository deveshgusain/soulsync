-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "totalFeedback" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "totalRating" SET DEFAULT 0;
