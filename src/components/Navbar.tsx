"use client";

import { useTheme } from "@/app/context/ThemContext";
import { MoonIcon, SunIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { TbBrandVscode } from "react-icons/tb";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/my-skill", label: "My Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-base-300 shadow-sm border-b-4 border-primary rounded-b-2xl z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-48">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold text-base-content flex items-center gap-2"
          >
            <TbBrandVscode className="text-primary text-xl md:text-2xl" />
            Najim<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-2 font-bold">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-3 py-2 rounded-md transition ${
                        isActive
                          ? "bg-primary text-primary-content"
                          : "text-base-content hover:bg-primary hover:text-primary-content"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-700 hover:border-primary transition"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-700 dark:text-white" />
              )}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-square btn-ghost"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6 text-base-content" />
              ) : (
                <FiMenu className="w-6 h-6 text-base-content" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black shadow-lg z-50">
          <div className="flex flex-col px-6 py-8">
            <ul className="space-y-2 font-bold">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-md px-3 py-2 transition ${
                        isActive
                          ? "bg-primary text-primary-content"
                          : "text-base-content hover:bg-primary hover:text-primary-content"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mt-6 flex items-center gap-2 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md"
            >
              {theme === "dark" ? (
                <>
                  <SunIcon className="w-5 h-5 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5 text-gray-700 dark:text-white" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
