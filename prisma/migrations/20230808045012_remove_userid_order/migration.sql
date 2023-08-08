/*
  Warnings:

  - You are about to drop the column `userId` on the `orders` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "userId";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "userId";
