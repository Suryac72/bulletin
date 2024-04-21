-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bulletin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "creationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updationDate" DATETIME NOT NULL
);
INSERT INTO "new_Bulletin" ("creationDate", "description", "id", "image", "title", "updationDate") SELECT "creationDate", "description", "id", "image", "title", "updationDate" FROM "Bulletin";
DROP TABLE "Bulletin";
ALTER TABLE "new_Bulletin" RENAME TO "Bulletin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
