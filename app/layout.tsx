import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Doro Gallery - AI灵感库",
  description: "高质量AI绘画提示词收藏集",
  icons: {
    icon: '/icon.png', // 需要你放入图片
  },
  openGraph: {
    title: 'Doro Gallery',
    description: '探索高质量 AI 绘画与提示词',
    images: ['/og-image.jpg'], // 需要你放入一张用于分享预览的大图
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
