import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import "./globals.css";

const passionOne = localFont({
    src: "./fonts/PassionOne-Regular.woff2",
    weight: "400",
    variable: "--font-passion-one",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Armageddon",
    description: "Armageddon",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={passionOne.variable}>
            <body>{children}</body>
        </html>
    );
}
