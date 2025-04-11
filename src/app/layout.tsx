import type { Metadata } from 'next';
import { Moo_Lah_Lah } from 'next/font/google';
import './globals.css';
import { ModernHeader } from '@/components/modern-header';
import { Footer } from '@/components/footer';

// Moo Lah Lah font từ Google Fonts
const mooLahLah = Moo_Lah_Lah({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-moolah',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moo Moo - Trang Web Tiện Ích',
  description: 'Trang web cung cấp các công cụ tiện ích như rút gọn URL, tạo mã 2FA và tạo mã QR',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${mooLahLah.variable}`}>
        <ModernHeader />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
