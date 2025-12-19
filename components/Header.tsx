'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, FileText, Scale, Calculator, BarChart3, Sparkles, Briefcase, Menu, X } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import LiveClock from './LiveClock';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/dashboard', Icon: BookOpen, title: 'Knowledge Center' },
    { href: '/standards', Icon: FileText, title: 'Standards' },
    { href: '/regulations', Icon: Scale, title: 'Regulations' },
    { href: '/tools', Icon: Calculator, title: 'Tools' },
    { href: '/ai-tools', Icon: Sparkles, title: 'AI Tools' },
    { href: '/regulatory-analysis', Icon: BarChart3, title: 'Analysis' },
    { href: '/professional-development', Icon: Briefcase, title: 'Professional Development' },
  ];

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 w-full z-50">
      {/* 3D effect with gradient and shadow layers */}
      <div
        className="relative backdrop-blur-md border-b border-teal-400/30"
        style={{
          background: 'linear-gradient(135deg, #0159A3 0%, #0168B0 25%, #0180A5 50%, #00AA86 100%)',
          boxShadow: '0 4px 20px rgba(1, 89, 163, 0.4), 0 2px 8px rgba(0, 170, 134, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)'
        }}
      >
        {/* Subtle top highlight for 3D effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <AnimatedLogo size={48} showText={false} />
              <span className="text-xl font-bold text-white">MEDev.AI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.Icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative group p-3 rounded-lg transition-all ${isActive(item.href)
                      ? 'bg-blue-500/30 text-white'
                      : 'text-blue-100 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                      {item.title}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-0">
                        <div className="border-4 border-transparent border-b-gray-900"></div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side - LinkedIn, Clock & Mobile Menu Button */}
            <div className="flex items-center gap-3">
              {/* Contact Us Button - Hidden on mobile */}
              <a
                href="https://www.bwtekmed.com/contact-us/"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              <a
                href="https://www.linkedin.com/company/bwtek-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
                title="Bwtek Medical on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Clock */}
              <div className="hidden sm:block">
                <LiveClock />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-blue-100 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-2 border-t border-blue-500/30 pt-4">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => {
                  const Icon = item.Icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive(item.href)
                        ? 'bg-blue-500/30 text-white'
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
              {/* Contact Us in Mobile Menu */}
              <div className="mt-4">
                <a
                  href="https://www.bwtekmed.com/contact-us/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

