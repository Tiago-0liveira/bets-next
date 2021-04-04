/*
  Warnings:

  - Added the required column `uid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSean" DATETIME NOT NULL,
    "username" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "displayName" TEXT,
    "photoUrl" TEXT,
    "uid" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "createdAt", "lastSean", "username", "level", "displayName", "photoUrl") SELECT "id", "createdAt", "lastSean", "username", "level", "displayName", "photoUrl" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
