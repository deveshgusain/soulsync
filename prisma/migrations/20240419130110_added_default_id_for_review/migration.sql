-- AlterTable
CREATE SEQUENCE review_reviewid_seq;
ALTER TABLE "Review" ALTER COLUMN "reviewId" SET DEFAULT nextval('review_reviewid_seq');
ALTER SEQUENCE review_reviewid_seq OWNED BY "Review"."reviewId";
