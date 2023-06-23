-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "deanId" INTEGER NOT NULL,
    "interval" INTEGER NOT NULL DEFAULT 1,
    "start" DATETIME NOT NULL,
    CONSTRAINT "Session_deanId_fkey" FOREIGN KEY ("deanId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Session" ("deanId", "id", "interval", "start") SELECT "deanId", "id", "interval", "start" FROM "Session";
DROP TABLE "Session";
ALTER TABLE "new_Session" RENAME TO "Session";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
