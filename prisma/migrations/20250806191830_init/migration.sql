-- CreateTable
CREATE TABLE "public"."Post" (
    "id" SERIAL NOT NULL,
    "author" TEXT,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "cover" TEXT,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
