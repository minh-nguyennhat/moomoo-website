'use client';

import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { Logo } from './logo';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Facebook, Send } from 'lucide-react';

export function ModernHeader() {
  // Create scroll-linked animation
  const { scrollY } = useScroll();
  const headerBgOpacity = useTransform(scrollY, [0, 50], [0.5, 0.9]);
  const headerBgBlur = useTransform(scrollY, [0, 50], [4, 10]);
  const headerBg = useMotionTemplate`rgba(255, 255, 255, ${headerBgOpacity})`;
  const headerBlur = useMotionTemplate`blur(${headerBgBlur}px)`;
  
  // Digital effect dots state
  const [dots, setDots] = useState<{x: number, y: number, size: number, alpha: number, velocity: number}[]>([]);
  
  // Initialize dots for the tech background effect
  useEffect(() => {
    const dotsArray = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 60,
      size: Math.random() * 3 + 1,
      alpha: Math.random() * 0.5 + 0.1,
      velocity: Math.random() * 0.5 + 0.1
    }));
    setDots(dotsArray);
    
    // Animate dots
    const interval = setInterval(() => {
      setDots(prev => prev.map(dot => ({
        ...dot,
        x: dot.x + dot.velocity > window.innerWidth ? 0 : dot.x + dot.velocity,
        alpha: Math.sin(Date.now() / 1000 * dot.velocity) * 0.2 + 0.3
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 h-16 overflow-hidden"
      style={{ 
        backgroundColor: headerBg,
        backdropFilter: headerBlur
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      {/* Tech background effect */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              top: dot.y,
              left: dot.x,
              width: dot.size,
              height: dot.size,
              opacity: dot.alpha
            }}
            animate={{
              opacity: [dot.alpha, dot.alpha * 0.5, dot.alpha],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 * dot.velocity,
              ease: "easeInOut",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />
      </div>
      
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,8 L40,8 C50,8 50,25 60,25 L100,25"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M100,0 L60,0 C50,0 50,16 40,16 L0,16"
          stroke="rgba(168, 85, 247, 0.2)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>
      
      <div className="container mx-auto flex items-center justify-between h-full px-4 relative z-10">
        {/* Logo and name */}
        <Logo />
        
        {/* Developer info and social links */}
        <div className="flex items-center space-x-4">
          <motion.div
            className="hidden sm:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-sm text-gray-600 mr-4">
              Developed by <span className="font-semibold text-cow-primary">Nguyễn Nhật Minh</span>
            </div>
            
            {/* Social links */}
            <SocialButton href="https://github.com" icon={<Github size={18} />} />
            <SocialButton href="https://facebook.com" icon={<Facebook size={18} />} />
            <SocialButton href="https://t.me" icon={<Send size={18} />} />
            
            {/* Vietnam flag */}
            <motion.div
              className="ml-3 relative w-8 h-6 overflow-hidden shadow-sm"
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-red-600"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17L6.12 20.5L7.72 13.88L2.92 9.26L9.56 8.38L12 2.25L14.44 8.38L21.08 9.26L16.28 13.88L17.88 20.5L12 17Z" fill="#FFD700" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Glowing edge at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), rgba(168, 85, 247, 0.5), transparent)'
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      />
    </motion.header>
  );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mx-1 text-gray-600 hover:text-cow-primary"
        whileHover={{ 
          scale: 1.2, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
    </Link>
  );
}
