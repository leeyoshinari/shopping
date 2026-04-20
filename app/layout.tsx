import type { Metadata, Viewport } from "next";
import "./globals.css";
import RegisterSW from "./components/ServiceWorkers";

export const metadata: Metadata = {
  title: "优惠券",
  description: "淘宝、京东、拼多多、唯品会优惠券聚合",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.ico",
  },
  appleWebApp: {
    capable: true,
    title: "优惠券",
    statusBarStyle: "black",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#3eaf7c"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <RegisterSW />
      <body className="antialiased">{children}</body>
    </html>
  );
}
