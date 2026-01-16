import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary-blue": "#2563eb",
                "primary-blue-dark": "#1e40af",
                "accent-cyan": "#06b6d4",
                "accent-purple": "#8b5cf6",
                "gray-50": "#f9fafb",
                "gray-100": "#f3f4f6",
                "gray-200": "#e5e7eb",
                "gray-300": "#d1d5db",
                "gray-600": "#4b5563",
                "gray-700": "#374151",
                "gray-800": "#1f2937",
                "gray-900": "#111827",
                "warning-red": "#ef4444",
                "success-green": "#10b981",
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
