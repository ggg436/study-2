"use server";

import { db } from "@/db";
import { notes } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Initialize S3 Client
const s3Client = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

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

    // Upload to S3
    await s3Client.send(
        new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME!,
            Key: storedFilename,
            Body: buffer,
            ContentType: file.type,
            // ACL: "public-read", // Uncomment if bucket allows ACLs, otherwise use bucket policy
        })
    );

    // Construct Public URL (Assuming standard public access)
    // For private buckets, you would need to implement Pre-signed URLs for viewing
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${storedFilename}`;

    // Save to DB
    await db.insert(notes).values({
        title: title,
        fileName: file.name,
        filePath: fileUrl,
        fileSize: (file.size / 1024).toFixed(2) + ' KB',
    });

    revalidatePath("/notes");
}
