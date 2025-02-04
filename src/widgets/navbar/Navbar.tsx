'use client';

import { NavbarHelper } from './NavbarHelper';

export default function Navbar() {
  const isVisible = NavbarHelper();

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#0F111A] shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav>
        <div className="w-[90vw] container mx-auto flex items-center justify-between w-full text-[#dee2e6] py-4 px-6">
          <a href="#home" className="hover:text-white text-xl text-white">
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
      </nav>
    </header>
  );
}
