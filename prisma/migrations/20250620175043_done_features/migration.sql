/*
  Warnings:

  - You are about to drop the column `descriptions` on the `Feature` table. All the data in the column will be lost.
  - Added the required column `theme` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feature" DROP COLUMN "descriptions",
ADD COLUMN     "theme" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FeatureDetail" (
    "id" SERIAL NOT NULL,
    "featureId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "textBreak" BOOLEAN NOT NULL,
    "textPosition" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "FeatureDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeatureDetail" ADD CONSTRAINT "FeatureDetail_featureId_fkey" FOREIGN KEY ("featureId") REFERENCES "Feature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
