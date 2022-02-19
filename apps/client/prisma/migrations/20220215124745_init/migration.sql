-- CreateTable
CREATE TABLE "simple" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "request_method" TEXT NOT NULL,
    "response_status_code" TEXT NOT NULL,
    "response_header" JSONB NOT NULL,
    "response_body" JSONB NOT NULL,
    "from" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_id" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "simple_pkey" PRIMARY KEY ("id")
);
