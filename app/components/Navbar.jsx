"use client";

import React, { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/home" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/service" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.name.toLowerCase()))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-100px 0px -35% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);

    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-0 z-50 h-[100px] w-full bg-gradient-to-r from-[#f9e7fa] via-white to-white shadow-sm">

        <div className="relative flex h-full w-full items-center">

          {/* ================= LOGO ================= */}

          <div className="absolute left-[55px] top-1/2 flex -translate-y-1/2 items-center">
            <img
              src="/images/logo.png"
              alt="Joshconsult Technologies Inc"
              className="block w-[105px] object-contain"
            />
          </div>

          {/* ================= NAVIGATION ================= */}

          <nav
            className="
              absolute
              left-1/2
              top-1/2
              flex
              -translate-x-1/2
              -translate-y-1/2
              items-center
              gap-[36px]
            "
          >
            {navItems.map((item) => {
              const section = item.name.toLowerCase();
              const isActive = activeSection === section;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(section)}
                  className={`
                    relative
                    whitespace-nowrap
                    border-0
                    bg-transparent
                    p-0
                    text-[12px]
                    font-normal
                    ${
                      isActive
                        ? "text-[#f6a000]"
                        : "text-[#111111]"
                    }
                  `}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* ================= APPLY NOW ================= */}

          <button
            type="button"
            className="
              absolute
              right-[55px]
              top-1/2
              flex
              h-[35px]
              w-[93px]
              -translate-y-1/2
              items-center
              justify-center
              rounded-[10px]
              border-0
              bg-[#f6a000]
              text-[11px]
              font-normal
              text-white
            "
          >
            Apply Now
          </button>

        </div>
      </header>

    </div>
  );
}