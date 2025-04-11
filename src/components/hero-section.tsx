'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Milk drops animation */}
      <MilkDrops />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-moolah text-5xl md:text-7xl leading-tight text-cow-primary mb-6">
            Chào mừng đến với Moo Moo
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8 mx-auto max-w-2xl">
            Trang web cung cấp các công cụ tiện ích miễn phí giúp rút gọn URL, tạo mã xác thực 2FA, 
            và tạo mã QR một cách nhanh chóng và dễ dàng.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button variant="cow" size="lg" className="rounded-full font-bold px-8">
              Bắt đầu ngay
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Tìm hiểu thêm
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Các giá trị cố định cho các giọt sữa để tránh hydration mismatch
const drops = [
  { id: 1, size: 16, left: 15, delay: 1.1 },
  { id: 2, size: 27, left: 32, delay: 1.5 },
  { id: 3, size: 22, left: 48, delay: 2.0 },
  { id: 4, size: 18, left: 63, delay: 2.6 },
  { id: 5, size: 20, left: 80, delay: 3.2 },
  { id: 6, size: 25, left: 25, delay: 3.8 },
  { id: 7, size: 23, left: 55, delay: 0.8 },
  { id: 8, size: 19, left: 70, delay: 1.3 },
  { id: 9, size: 21, left: 90, delay: 1.9 },
  { id: 10, size: 17, left: 40, delay: 2.4 }
];

function MilkDrops() {
  // Chỉ hiển thị animation sau khi đã hydrate
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // Không render gì trên server-side
  }

  return (
    <>
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="milk-drop"
          style={{
            width: drop.size,
            height: drop.size,
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: drop.delay / 5 }}
        />
      ))}
    </>
  );
}
