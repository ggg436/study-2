"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

function getS3Client() {
    if (
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
    ) {
        return new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    return null;
}

export async function uploadNote(formData: FormData) {
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;

    if (!file || !title) {
        throw new Error("Missing file or title");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const safeFilename = file.name.replace(/[^a-z0-9.]/gi, '_').toLowerCase();
    const storedFilename = `${uniqueSuffix}-${safeFilename}`;

    let filePath = "";

    const s3Client = getS3Client();

    if (s3Client && process.env.AWS_BUCKET_NAME) {
        // === AWS S3 Upload ===
        console.log("Uploading to AWS S3...");
        await s3Client.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: storedFilename,
                Body: buffer,
                ContentType: file.type,
            })
        );
        filePath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${storedFilename}`;
    } else {
        // === Local Filesystem Upload ===
        console.log("AWS keys not found, uploading to local filesystem...");
        const uploadDir = path.join(process.cwd(), "public", "uploads");
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (e) {
            // Ignore if exists
        }

        const localPath = path.join(uploadDir, storedFilename);
        await writeFile(localPath, buffer);
        filePath = `/uploads/${storedFilename}`;
    }

    // Save to DB
    await db.insert(notes).values({
        title: title,
        fileName: file.name,
        filePath: filePath,
        fileSize: (file.size / 1024).toFixed(2) + ' KB',
    });

    revalidatePath("/notes");
}
