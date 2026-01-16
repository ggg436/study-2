"use client";

import Sidebar from '../components/Sidebar';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex font-sans text-gray-900">
            <Sidebar />

            <main className="flex-1 ml-64 p-10">
                {/* Top Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>Monday, September 30</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                        <button className="text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg></button>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                {/* Placeholder for avatar */}
                                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://i.pravatar.cc/150?u=amanda')" }}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                Amanda P.
                                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Welcome & Customize */}
                <div className="flex items-end justify-between mb-8">
                    <h1 className="text-4xl font-normal text-gray-400">
                        Good morning, <span className="text-gray-900 font-medium">Amanda</span>
                    </h1>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 shadow-sm flex items-center gap-2 hover:bg-gray-50">
                        Customize
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-6">

                    {/* Column 1: To Do List & Reminder */}
                    <div className="col-span-4 space-y-6">
                        {/* To Do List */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-[480px] flex flex-col">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">✏️</span>
                                <h2 className="text-2xl font-bold text-gray-900">To do list</h2>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer pl-1">
                                    <span className="text-xl">+</span>
                                    <span className="text-sm font-medium">Create new</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                                <div className="flex items-start gap-3 group">
                                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                    <span className="text-gray-600 text-sm leading-relaxed">Finish the sales presentation 🔥 for the client meeting at 2.00 PM</span>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <input type="checkbox" checked readOnly className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                    <span className="text-gray-400 line-through text-sm leading-relaxed">Send  follow-up emails to potential leads</span>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                    <span className="text-gray-600 text-sm leading-relaxed">Review and approve the marketing budget 📅</span>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <input type="checkbox" checked readOnly className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                    <span className="text-gray-400 line-through text-sm leading-relaxed">Take 10 minutes for meditation or deep breathing</span>
                                </div>
                            </div>
                        </div>

                        {/* Reminder Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-500">Reminder</h3>
                                <div className="flex gap-1 text-gray-400">
                                    <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
                                    <button className="hover:text-gray-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-900 font-semibold mb-1">Today's Meeting</p>
                                    <p className="text-gray-300 text-xs">12:00 PM</p>
                                    <div className="mt-4 flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs text-white">+3</div>
                                    </div>
                                </div>
                                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 transform rotate-3">
                                    {/* Zoom Icon Placeholder */}
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14 19V5l7.5-3v20L14 19zm-2-2.5l-9.5-6.5L12 3v13.5z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 & 3: Time, Activity then Tasks */}
                    <div className="col-span-8 grid grid-cols-2 gap-6">

                        {/* Time Tracker */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-between h-[320px]">
                            <div className="w-full flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-gray-900">Time tracker</h3>
                                <button className="text-gray-400 hover:text-gray-600"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg></button>
                            </div>

                            <div className="text-6xl font-medium text-gray-900 tracking-wider">
                                04:21:58
                            </div>

                            <div className="flex items-center gap-4 mt-8">
                                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-900 shadow-sm hover:bg-gray-50">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                </button>
                                <button className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-200 hover:bg-orange-600">
                                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                                </button>
                            </div>
                        </div>

                        {/* Activity Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 h-[320px]">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold text-gray-900">Activity</h3>
                                <div className="flex text-xs font-semibold bg-gray-50 rounded-lg p-1">
                                    <button className="px-3 py-1 bg-white rounded shadow-sm text-blue-600">weekly</button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-gray-700">daily</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="space-y-4">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1 h-4 bg-yellow-400 rounded-full"></div>
                                            <span className="text-xs text-gray-400 font-medium">Working hours</span>
                                        </div>
                                        <span className="text-xl font-bold text-gray-900 ml-3">29/40</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1 h-4 bg-cyan-400 rounded-full"></div>
                                            <span className="text-xs text-gray-400 font-medium">Tasks completed</span>
                                        </div>
                                        <span className="text-xl font-bold text-gray-900 ml-3">8/12</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="w-1 h-4 bg-emerald-400 rounded-full"></div>
                                            <span className="text-xs text-gray-400 font-medium">Projects completed</span>
                                        </div>
                                        <span className="text-xl font-bold text-gray-900 ml-3">4/7</span>
                                    </div>
                                </div>

                                <div className="flex-1 flex justify-center items-center relative">
                                    {/* Simple CSS Radial Charts */}
                                    <div className="relative w-40 h-40">
                                        {/* Back rings */}
                                        <div className="absolute inset-2 rounded-full border-4 border-gray-100"></div>
                                        <div className="absolute inset-6 rounded-full border-4 border-gray-100"></div>
                                        <div className="absolute inset-10 rounded-full border-4 border-gray-100"></div>

                                        {/* Active segments (simplified with border for demo) */}
                                        <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-yellow-400 border-r-yellow-400 transform -rotate-45" style={{ transform: 'rotate(240deg)' }}></div>
                                        <div className="absolute inset-6 rounded-full border-4 border-transparent border-t-cyan-400 border-l-cyan-400 transform rotate-180"></div>
                                        <div className="absolute inset-10 rounded-full border-4 border-transparent border-t-emerald-400 border-r-emerald-400 transform rotate-90"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mt-2">
                                <div className="flex gap-1">
                                    <div className="w-6 h-1.5 bg-gray-800 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Tasks I've assigned - Spanning 2 cols */}
                        <div className="col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Tasks I've assigned</h3>
                                <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                </button>
                            </div>

                            <div className="flex gap-6 border-b border-gray-100 mb-6">
                                <button className="pb-2 text-sm font-semibold text-blue-600 border-b-2 border-blue-600">Upcoming</button>
                                <button className="pb-2 text-sm font-medium text-gray-400 hover:text-gray-600">Overdue</button>
                                <button className="pb-2 text-sm font-medium text-gray-400 hover:text-gray-600">Completed</button>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">8</div>
                                    <span className="flex-1 text-sm font-medium text-gray-700">New Ideas for campaign</span>
                                    <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[60%] bg-blue-400 rounded-full"></div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 w-8">60%</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold">7</div>
                                    <span className="flex-1 text-sm font-medium text-gray-700">Change button</span>
                                    <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[27%] bg-cyan-400 rounded-full"></div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 w-8">27%</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold">6</div>
                                    <span className="flex-1 text-sm font-medium text-gray-700">New BrandBook</span>
                                    <div className="w-32 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[95%] bg-blue-300 rounded-full"></div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-500 w-8">95%</span>
                                    <div className="flex -space-x-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                                        <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}
