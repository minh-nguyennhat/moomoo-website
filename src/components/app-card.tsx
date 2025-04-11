'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface App {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

interface AppCardProps {
  app: App;
  index: number;
}

export function AppCard({ app, index }: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className={`${app.color} h-24 flex items-center justify-center`}>
        <motion.span 
          className="text-5xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          {app.icon}
        </motion.span>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{app.title}</h3>
        <p className="text-gray-600 mb-6">{app.description}</p>
        
        <Link href={app.href}>
          <Button variant="cow" className="w-full">
            Sử dụng ngay
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
