"use client";

import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 h-[100px] w-full bg-gradient-to-r from-[#f9e7fa] via-white to-white shadow-sm">
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-6 lg:px-[55px]">
        
        {/* ================= LOGO ================= */}
        <Link href="/home" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Joshconsult Technologies Inc"
            className="block w-[105px] object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center gap-[36px] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="whitespace-nowrap border-0 bg-transparent p-0 text-[12px] font-normal text-[#111111] no-underline outline-none hover:text-[#f6a000] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= APPLY NOW (Desktop) ================= */}
        <Link
          href="/form"
          className="hidden h-[35px] w-[93px] items-center justify-center rounded-[10px] bg-[#f6a000] text-[11px] font-normal text-white no-underline outline-none transition duration-200 hover:bg-[#e99500] lg:flex"
        >
          Apply Now
        </Link>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-[35px] w-[35px] flex-col items-center justify-center gap-[5px] rounded-[5px] border border-gray-300 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-[2px] w-[20px] bg-black transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-[2px] w-[20px] bg-black transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-[20px] bg-black transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

      </div>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md lg:hidden">
          <nav className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 text-[14px] text-[#111111] no-underline hover:text-[#f6a000] w-full text-center border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/form"
              className="mt-4 flex h-[35px] w-[150px] items-center justify-center rounded-[10px] bg-[#f6a000] text-[11px] text-white no-underline hover:bg-[#e99500]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}