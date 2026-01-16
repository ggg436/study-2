"use client";

import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function DemoPage() {
    const [sections, setSections] = useState({
        fabric: true,
        trims: false,
        labels: false,
        packaging: true
    });

    const [selectedItems, setSelectedItems] = useState<string[]>(['Polyester lining', 'Acetate looms']);

    const toggleSection = (section: keyof typeof sections) => {
        setSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const toggleItem = (item: string) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(prev => prev.filter(i => i !== item));
        } else {
            setSelectedItems(prev => [...prev, item]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            <Sidebar />

            <main className="flex-1 ml-64 p-8">
                <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 min-h-[calc(100vh-4rem)] relative flex flex-col">

                    {/* Header */}
                    <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="hover:text-gray-600 cursor-pointer font-medium">Back to Costings</span>
                        </div>

                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">Initial estimations</h1>
                                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L6.29 3.43L4.86 2L3.43 3.43L2 2L0.57 3.43L2 4.86L0.57 6.29L2 7.71L0.57 9.14L3 11.57L2 12.57L3 13.57L2 14.57L3 15.57L2 16.57L3 17.57L2 18.57L3 19.57L2 20.57L3.43 22L4.86 20.57L6.29 22L7.71 20.57L9.14 22L10.57 20.57L14.14 24.14L15.57 22.71L12 19.14L20.57 14.86Z" /></svg>
                                        Rounded Collar T-Shirt
                                    </span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><path d="M16.53,11.16c1.23-0.26,2.4-0.18,3.46,0.18c0.2,0.07,0.3,0.3,0.22,0.5l-0.81,2.23c-0.08,0.2-0.3,0.31-0.51,0.23c-0.78-0.27-1.63-0.34-2.54-0.15L16.53,11.16z M12.91,12.59c-0.3,0.83-0.07,1.75,0.49,2.46c-0.27,0.73-0.03,1.57,0.61,2.12c0.64,0.55,1.55,0.57,2.2,0.11c0.05,0.78,0.6,1.45,1.38,1.61c0.18,0.04,0.36-0.07,0.43-0.25l0.87-2.39c0.07-0.18-0.03-0.38-0.2-0.45c-0.58-0.23-0.96-0.74-1-1.35c0.65-0.18,1.15-0.72,1.26-1.39C19.06,12.4,18.68,11.75,18,11.4c0.15-0.65-0.08-1.34-0.56-1.78c-0.18-0.17-0.45-0.15-0.63,0.02l-3.88,3.88C12.9,13.23,12.89,12.91,12.91,12.59z M12,2l-5.6,5.6C5.5,8.49,5,9.7,5,10.96v0c0,1.26,0.5,2.47,1.4,3.37L12,20h0l5.6-5.6c0.9-0.9,1.4-2.11,1.4-3.37v0c0-1.26-0.5-2.47-1.4-3.37L12,2Zm1.4,5.8l-4,4c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l4-4c0.4-0.4,1-0.4,1.4,0C13.8,4.8,13.8,5.4,13.4,5.8z" /></svg>
                                        Red
                                    </span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        47 items
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button className="px-4 py-2.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    Import components
                                </button>
                                <button className="px-4 py-2.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                    Export
                                </button>
                                <button className="px-4 py-2.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 pb-32 space-y-10">

                        {/* Fabric Section */}
                        <div className="space-y-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer group"
                                onClick={() => toggleSection('fabric')}
                            >
                                <div className={`transform transition-transform text-gray-400 ${sections.fabric ? 'rotate-90' : ''}`}>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6L14 10L6 14V6Z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900">Fabric</h3>
                                <span className="bg-gray-100 text-gray-500 font-medium text-xs px-2 py-0.5 rounded-full">4</span>
                            </div>

                            {sections.fabric && (
                                <div className="rounded-xl overflow-hidden">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50/50 text-gray-400 font-bold uppercase text-[10px] tracking-wider border-b border-gray-100">
                                            <tr>
                                                <th className="px-6 py-4 w-12 text-center">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                                </th>
                                                <th className="px-6 py-4">Item</th>
                                                <th className="px-6 py-4 w-32">Price</th>
                                                <th className="px-6 py-4 w-32">Quantity</th>
                                                <th className="px-6 py-4 w-32 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {[
                                                { name: 'Polyester lining', price: 0.12, qty: 3, total: 0.36 },
                                                { name: 'Acetate looms', price: 0.59, qty: 1, total: 0.59 },
                                                { name: 'Rayon', price: 0.44, qty: 2, total: 0.88 },
                                            ].map((item, idx) => (
                                                <tr key={idx} className={`hover:bg-gray-50 transition-colors ${selectedItems.includes(item.name) ? 'bg-blue-50/40' : ''}`}>
                                                    <td className="px-6 py-4 text-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedItems.includes(item.name)}
                                                            onChange={() => toggleItem(item.name)}
                                                            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                                        />
                                                    </td>
                                                    <td className={`px-6 py-4 font-semibold text-sm ${selectedItems.includes(item.name) ? 'text-gray-900' : 'text-gray-700'}`}>{item.name}</td>
                                                    <td className="px-6 py-4 text-gray-600 font-medium">€{item.price.toFixed(2)}</td>
                                                    <td className="px-6 py-4 text-gray-600 font-medium">{item.qty}</td>
                                                    <td className="px-6 py-4 text-right font-bold text-gray-900">€{item.total.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td colSpan={5} className="px-6 py-3 text-gray-400 border-t border-gray-50 hover:bg-gray-50 cursor-pointer">
                                                    <div className="flex items-center gap-3 text-sm">
                                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                                        New item
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-100 text-right rounded-b-xl">
                                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Subtotal:</span>
                                        <span className="ml-3 font-bold text-gray-900 text-lg">€2.95</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Trims Section */}
                        <div className="space-y-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer group"
                                onClick={() => toggleSection('trims')}
                            >
                                <div className={`transform transition-transform text-gray-400 ${sections.trims ? 'rotate-90' : ''}`}>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6L14 10L6 14V6Z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900">Trims</h3>
                                <span className="bg-gray-100 text-gray-500 font-medium text-xs px-2 py-0.5 rounded-full">6</span>
                            </div>
                            {sections.trims === false && (
                                <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                                    <div className="bg-gray-50/30 px-6 py-4 text-right">
                                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Subtotal:</span>
                                        <span className="ml-3 font-bold text-gray-900 text-lg">€6.41</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Labels Section */}
                        <div className="space-y-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer group"
                                onClick={() => toggleSection('labels')}
                            >
                                <div className={`transform transition-transform text-gray-400 ${sections.labels ? 'rotate-90' : ''}`}>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6L14 10L6 14V6Z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900">Labels</h3>
                                <span className="bg-gray-100 text-gray-500 font-medium text-xs px-2 py-0.5 rounded-full">0</span>
                            </div>

                            {/* Always show expanded state for Labels as per update requests or keep it collapsible. 
                   The image shows "No items yet" state. */}
                            <div className="border border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-start gap-4">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1 text-sm">No items yet</h4>
                                    <p className="text-gray-500 text-xs">Add first item or import existing components into this section</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 text-xs font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 bg-white text-gray-700 shadow-sm">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                        Add item
                                    </button>
                                    <button className="px-4 py-2 text-xs font-semibold border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2 bg-white text-gray-700 shadow-sm">
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                        Import components
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Packaging Section */}
                        <div className="space-y-4">
                            <div
                                className="flex items-center gap-2 cursor-pointer group"
                                onClick={() => toggleSection('packaging')}
                            >
                                <div className={`transform transition-transform text-gray-400 ${sections.packaging ? 'rotate-90' : ''}`}>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6 6L14 10L6 14V6Z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900">Packaging</h3>
                                <span className="bg-gray-100 text-gray-500 font-medium text-xs px-2 py-0.5 rounded-full">3</span>
                            </div>

                            {sections.packaging && (
                                <div className="border-t border-gray-100">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50/50 text-gray-400 font-bold uppercase text-[10px] tracking-wider border-b border-gray-100">
                                            <tr>
                                                <th className="px-6 py-4 w-12 text-center">
                                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                                                </th>
                                                <th className="px-6 py-4">Item</th>
                                                <th className="px-6 py-4 w-32">Price</th>
                                                <th className="px-6 py-4 w-32">Quantity</th>
                                                <th className="px-6 py-4 w-32 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {[
                                                { name: 'Packaging type', price: 0.21, qty: 1, total: 0.21 },
                                                { name: 'Protective foil', price: 0.04, qty: 1, total: 0.04 },
                                                { name: 'Packaging type', price: 0.08, qty: 1, total: 0.08 },
                                            ].map((item, idx) => (
                                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-6 py-4 text-center">
                                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                                    </td>
                                                    <td className="px-6 py-4 font-semibold text-sm text-gray-900">{item.name}</td>
                                                    <td className="px-6 py-4 text-gray-600 font-medium">€{item.price.toFixed(2)}</td>
                                                    <td className="px-6 py-4 text-gray-600 font-medium">{item.qty}</td>
                                                    <td className="px-6 py-4 text-right font-bold text-gray-900">€{item.total.toFixed(2)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="bg-gray-50/50 px-6 py-4 border-t border-gray-100 text-right rounded-b-xl">
                                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wide">Subtotal:</span>
                                        <span className="ml-3 font-bold text-gray-900 text-lg">€0.33</span>
                                    </div>
                                </div>
                            )}
                            {/* New Item Row for Packaging */}
                            <div className="px-6 py-4 text-gray-400 border-t border-gray-50 hover:bg-gray-50 cursor-pointer flex items-center gap-3 text-sm">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                New item
                            </div>
                        </div>

                    </div>

                    {/* Footer actions */}
                    <div className="p-8 pb-12 border-t border-gray-100 mt-auto flex items-center justify-between rounded-b-2xl">
                        <div className="text-gray-400 text-sm flex items-center gap-2 cursor-pointer hover:text-gray-600 font-medium">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                            New section
                        </div>
                        <div className="flex items-center gap-3 text-xl">
                            <span className="text-gray-500 font-medium text-lg">Total:</span>
                            <span className="font-extrabold text-gray-900 text-2xl">€25.69</span>
                        </div>
                    </div>

                    {/* Floating Action Bar */}
                    {selectedItems.length > 0 && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#111827] text-white px-2 py-2 rounded-lg shadow-2xl flex items-center gap-6 animate-fade-in-up z-30 min-w-[340px] justify-between border border-gray-800">
                            <div className="flex items-center gap-3 pl-4">
                                <span className="text-xs font-medium">{selectedItems.length} items selected</span>
                                <button onClick={() => setSelectedItems([])} className="text-gray-500 hover:text-white">
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <button
                                className="bg-white text-gray-900 px-3 py-1.5 roundedmd text-xs font-bold hover:bg-gray-100 flex items-center gap-2 rounded transition-colors"
                                onClick={() => setSelectedItems([])}
                            >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                Remove items
                            </button>
                        </div>
                    )}

                </div>
            </main>
        </div>
    );
}
