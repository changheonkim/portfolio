'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D1117] shadow-md z-50">
      {/* 나머지 콘텐츠 */}
      <motion.nav
        className="flex space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 3.5 }}
      >
        <div className="container mx-auto flex items-center justify-between w-[1200px] text-[#ADD8E6] font-bold py-4 px-6">
          <a href="#home" className="hover:text-white text-xl text-[#97B6F1]">
            Naro's Portfolio
          </a>
          <div className="flex items-center gap-[14px]">
            <a
              href="#home"
              className="hover:text-white transition-all duration-300"
            >
              About me
            </a>
            <a
              href="#about"
              className="hover:text-white transition-all duration-300"
            >
              Skill
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-all duration-300"
            >
              Archiving
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-all duration-300"
            >
              Project
            </a>
            <a
              href="#career"
              className="hover:text-white transition-all duration-300"
            >
              Career
            </a>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
