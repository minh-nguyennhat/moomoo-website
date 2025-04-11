'use client';

import { Logo } from './logo';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo />
          
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Moo Moo. Phát triển bởi <span className="text-cow-primary font-semibold">Nguyễn Nhật Minh</span>
            </p>
            <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
              <FooterLink href="https://github.com">GitHub</FooterLink>
              <FooterLink href="/privacy">Chính sách</FooterLink>
              <FooterLink href="/terms">Điều khoản</FooterLink>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-500 hover:text-cow-primary text-xs transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
