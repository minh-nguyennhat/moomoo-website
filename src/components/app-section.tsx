'use client';

import { AppCard } from './app-card';
import { motion } from 'framer-motion';

export function AppSection() {
  const apps = [
    {
      id: 'url-shortener',
      title: 'Rút Gọn URL',
      description: 'Tạo liên kết ngắn gọn từ URL dài để dễ dàng chia sẻ trên các nền tảng mạng xã hội.',
      icon: '🔗',
      href: '/url-shortener',
      color: 'bg-gradient-to-br from-pink-200 to-pink-400',
    },
    {
      id: '2fa',
      title: 'Tạo Mã 2FA',
      description: 'Tạo mã xác thực hai yếu tố (2FA) để bảo mật tài khoản của bạn tốt hơn.',
      icon: '🔐',
      href: '/2fa-generator',
      color: 'bg-gradient-to-br from-blue-200 to-blue-400',
    },
    {
      id: 'qr-code',
      title: 'Tạo Mã QR',
      description: 'Tạo mã QR tùy chỉnh cho văn bản, URL, hoặc thông tin liên hệ của bạn.',
      icon: '📱',
      href: '/qr-generator',
      color: 'bg-gradient-to-br from-green-200 to-green-400',
    }
  ];

  return (
    <section id="tools" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="font-moolah text-3xl md:text-5xl text-cow-primary mb-4">Các Công Cụ Của Chúng Tôi</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chúng tôi cung cấp các công cụ trực tuyến miễn phí và dễ sử dụng để giúp cuộc sống kỹ thuật số của bạn trở nên đơn giản hơn.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <AppCard key={app.id} app={app} index={index} />
        ))}
      </div>
    </section>
  );
}
