
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Education", href: "/education" },
 { name: "Hobbies", href: "/hobbies" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex min-h-16 flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-7 w-7 text-pink-500" />
          <span className="text-xl font-bold text-gray-900">
            MyPortfolio
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-pink-500 text-white shadow-sm"
                    : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
