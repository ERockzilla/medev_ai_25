'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { memo } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the 3D component - only loads when Footer is rendered
const GaussianBeamVortex3D = dynamic(() => import('./GaussianBeamVortex3D'), {
  ssr: false, // Disable server-side rendering for WebGL
  loading: () => (
    <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-[#0159A3]/20 to-[#00AA86]/20 animate-pulse flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
    </div>
  ),
});

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-950 border-t border-slate-800/50 safe-area-bottom">
      {/* Contact Banner - Most prominent */}
      <div
        className="border-b border-slate-800/50"
        style={{
          background: 'linear-gradient(135deg, #0159A3 0%, #0168B0 25%, #0180A5 50%, #00AA86 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Need Help with Regulatory Compliance?
              </h3>
              <p className="text-white/80">
                Get expert guidance on FDA regulations, ISO standards, and medical device development.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {/* Email Contact - Primary CTA */}
              <a
                href="mailto:support@bwtekmed.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0159A3] font-semibold rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bwtek-medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Contact */}
          <div>
            <div className="mb-4">
              <div className="relative inline-block">
                <div
                  className="text-white font-bold text-lg px-4 py-2 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #0159A3 0%, #00AA86 100%)',
                  }}
                >
                  medev.ai
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Actionable intelligence for medical device professionals. Navigate compliance,
              design, and development with confidence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 items-center">
              <SocialLink href="mailto:eric@medev.ai" icon={<EmailIcon />} label="Email" />
              <SocialLink href="https://www.linkedin.com/company/bwtek-medical/" icon={<LinkedInIcon />} label="Company LinkedIn" />
              <SocialLink href="https://www.linkedin.com/in/ericdrock/" icon={<PersonIcon />} label="Eric Rock on LinkedIn" />
              <SocialLink href="https://github.com/ERockzilla" icon={<GitHubIcon />} label="GitHub" />
              <SocialLink href="/feed.xml" icon={<RSSIcon />} label="RSS Feed" />
            </div>
            {/* W3C Valid RSS Badge */}
            <div className="mt-4">
              <a
                href="http://validator.w3.org/feed/check.cgi?url=https%3A//www.medev.ai/feed.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
                title="Validate our RSS feed"
              >
                <Image
                  src="/valid-rss-rogers.png"
                  alt="Valid RSS - W3C Validated Feed"
                  width={88}
                  height={31}
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Platform - All Main Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Knowledge Center</FooterLink>
              <FooterLink href="/standards">Standards</FooterLink>
              <FooterLink href="/regulations">Regulations</FooterLink>
              <FooterLink href="/tools">Tools</FooterLink>
              <FooterLink href="/ai-tools">AI Tools</FooterLink>
              <FooterLink href="/regulatory-analysis">Analysis</FooterLink>
              <FooterLink href="/professional-development">Professional Dev</FooterLink>
              <FooterLink href="/future-generations">Future Generations</FooterLink>
              <FooterLink href="/news">News Feed</FooterLink>
              <FooterLink href="/bookmarks">Bookmarks</FooterLink>
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="https://www.fda.gov/medical-devices" external>FDA Medical Devices</FooterLink>
              <FooterLink href="https://www.iso.org/committee/54892.html" external>ISO TC 210</FooterLink>
              <FooterLink href="https://www.ncbi.nlm.nih.gov/" external>NIH Clinical Research</FooterLink>
              <FooterLink href="https://huggingface.co/" external>Hugging Face</FooterLink>
              <FooterLink href="https://ai.google.dev/" external>Google AI Dev</FooterLink>
              <FooterLink href="https://umami.is/" external>Umami Analytics</FooterLink>
              <FooterLink href="https://nextjs.org/docs" external>Next.js Docs</FooterLink>
              <FooterLink href="https://lmstudio.ai/" external>LM Studio</FooterLink>
              <FooterLink href="https://paperswithcode.com/" external>Papers With Code</FooterLink>
              <FooterLink href="https://www.connectedpapers.com/" external>Connected Papers</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="https://bwtekmed.com" external>BWtek Medical</FooterLink>
              <FooterLink href="https://www.linkedin.com/company/bwtek-medical/" external>LinkedIn</FooterLink>
              <FooterLink href="mailto:support@bwtekmed.com">Contact</FooterLink>
            </ul>

            {/* Author Attribution for E-E-A-T */}
            <BlackHoleEffectWrapper />
          </div>
        </div>

        {/* Powered By Section */}
        <div className="border-t border-slate-800/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-slate-500 text-sm">Powered by</span>
            <a
              href="https://bwtekmed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/bwtek-medical-logo.png"
                alt="Bwtek Medical - ISO 13485 Certified"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
                style={{ width: 'auto', height: 'auto' }}
                loading="lazy"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} medev.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span>Built for medical device professionals</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">ISO 13485 Focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = memo(function FooterLink({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) {
  if (external) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-white text-sm transition-colors inline-flex items-center gap-1 hover:translate-x-1 transform duration-200"
        >
          {children}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className="text-slate-300 hover:text-white text-sm transition-colors inline-block hover:translate-x-1 transform duration-200"
      >
        {children}
      </Link>
    </li>
  );
});

const SocialLink = memo(function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal-500/50 hover:bg-slate-800 transition-all"
      target="_blank"
      rel="noopener noreferrer"
      title={label}
    >
      {icon}
    </a>
  );
});

const EmailIcon = memo(function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
});

const PersonIcon = memo(function PersonIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
});

const LinkedInIcon = memo(function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
});

const GitHubIcon = memo(function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
});

const RSSIcon = memo(function RSSIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
    </svg>
  );
});

const BlackHoleEffectWrapper = memo(function BlackHoleEffectWrapper() {
  return (
    <div className="mt-6 p-5 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-[#0159A3]/50 transition-all duration-300">
      <a
        href="https://www.linkedin.com/in/ericdrock/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 text-white hover:text-teal-400 transition-colors"
      >
        <div className="flex-shrink-0">
          <GaussianBeamVortex3D />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-semibold text-lg">Eric Rock</div>
          <div className="text-sm text-slate-400">What up Paul?!</div>
        </div>
      </a>
    </div>
  );
});
