'use client';

import Link from 'next/link';
import { Logo } from './logo';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/">Trang Chủ</NavLink>
          <NavLink href="#tools">Công Cụ</NavLink>
          <NavLink href="#about">Giới Thiệu</NavLink>
        </nav>
        
        <Button variant="cow" size="sm" className="rounded-full font-medium">
          Liên Hệ
        </Button>
      </div>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-cow-primary transition-colors relative group"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-cow-primary transition-all group-hover:w-full" />
    </Link>
  );
}
