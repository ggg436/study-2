import Sidebar from "../components/Sidebar";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { desc } from "drizzle-orm";
import { uploadNote } from "./actions";

export default async function NotesPage() {
    const allNotes = await db.select().from(notes).orderBy(desc(notes.createdAt));

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
            <Sidebar />

            <main className="flex-1 ml-64 p-10">
                <h1 className="text-3xl font-bold mb-8 text-gray-900">My Notes</h1>

                {/* Upload Section */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
                    <h2 className="text-lg font-semibold mb-4">Upload New Note</h2>
                    <form action={uploadNote} className="flex gap-4 items-end">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="Meeting notes, Project specs..."
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                File
                            </label>
                            <input
                                type="file"
                                name="file"
                                required
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors h-10"
                        >
                            Upload
                        </button>
                    </form>
                </div>

                {/* Notes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allNotes.length === 0 ? (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            No notes uploaded yet.
                        </div>
                    ) : (
                        allNotes.map((note) => (
                            <div
                                key={note.id}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {note.createdAt ? new Date(note.createdAt).toLocaleDateString() : 'Just now'}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                                    {note.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4 truncate">
                                    {note.fileName} ({note.fileSize})
                                </p>
                                <a
                                    href={note.filePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto w-full py-2 text-center text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    View File
                                </a>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
