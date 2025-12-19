'use client';

import { useEffect } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { BookmarkProvider } from '@/contexts/BookmarkContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Easter egg for fellow developers
    const asciiArt = `
███╗   ███╗███████╗██████╗ ███████╗██╗   ██╗   █████╗ ██╗
████╗ ████║██╔════╝██╔══██╗██╔════╝██║   ██║  ██╔══██╗██║
██╔████╔██║█████╗  ██║  ██║█████╗  ██║   ██║  ███████║██║
██║╚██╔╝██║██╔══╝  ██║  ██║██╔══╝  ╚██╗ ██╔╝  ██╔══██║██║
██║ ╚═╝ ██║███████╗██████╔╝███████╗ ╚████╔╝██╗██║  ██║██║
╚═╝     ╚═╝╚══════╝╚═════╝ ╚══════╝  ╚═══╝ ╚═╝╚═╝  ╚═╝╚═╝
    `;

    console.log('%c' + asciiArt, 'color: #10b981; font-family: monospace; font-size: 10px;');

    console.log(
      '%c👋 Oh hey, you opened DevTools. Bold move.',
      'color: #3b82f6; font-size: 14px; font-weight: bold; padding: 8px 0;'
    );

    console.log(
      '%c' +
      '+-------------------------------------------------------------------+\n' +
      '|  Welcome to medev.ai - where we understand AI means      |\n' +
      '|  alien invasion to different people where math alludes theory.    |\n' +
      '|                                                                   |\n' +
      '|  This is an EDUCATIONAL site built to connect medical device     |\n' +
      '|  developers with hard-earned knowledge and promote               |\n' +
      '|  collaboration. Once you\'ve read the ISO IEC AAMI ANSI standards |\n' +
      '|  my advice is to read the historical text from                   |\n' +
      '|  glutenberg.org or get a sheet of bubble wrap and start popping. |\n' +
      '|                                                                   |\n' +
      '|  Built with virtual bricks and real input subtext follow-up.     |\n' +
      '|  Want to collaborate? eric@medev.ai                              |\n' +
      '|  Found a bug? Luck runs out...so i guess tell me about it. Plz,ty|\n' +
      '+-------------------------------------------------------------------+',
      'color: #6b7280; font-family: monospace; font-size: 11px;'
    );

    console.log(
      '%c🔐 SECURITY NOTE',
      'color: #ef4444; font-size: 12px; font-weight: bold;'
    );
    console.log(
      '%cIf you\'ve discovered a vulnerability, congrats - you\'re officially\n' +
      'more thorough than most auditors I\'ve worked with. Please responsibly\n' +
      'disclose to eric@medev.ai and I\'ll owe you a coffee (or a beer,\n' +
      'depending on severity and your timezone).\n\n' +
      'No bounty program yet, but you\'ll get eternal gratitude and\n' +
      'possibly mentioned in a future "thanks" section somewhere.',
      'color: #9ca3af; font-family: monospace; font-size: 11px;'
    );

    console.log(
      '%c🤝 Let\'s build something useful together.',
      'color: #10b981; font-size: 12px; font-style: italic; padding-top: 8px;'
    );

    // 🎮 Easter Egg: Konami Code (↑↑↓↓←→←→BA)
    let konamiSequence: string[] = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

    // 🎮 Easter Egg: Type "matrix" anywhere
    let matrixSequence = '';

    const handleKeydown = (e: KeyboardEvent) => {
      // Konami code detection
      konamiSequence.push(e.code);
      konamiSequence = konamiSequence.slice(-10);
      if (konamiSequence.join(',') === konamiCode.join(',')) {
        document.body.style.transition = 'transform 0.5s ease';
        document.body.style.transform = 'rotate(180deg)';
        console.log('%c🎮 You found it! Now get back to work on that 510(k)...', 'color: #10b981; font-size: 14px; font-weight: bold;');
        setTimeout(() => {
          document.body.style.transform = '';
        }, 3000);
      }

      // Matrix mode detection (type "matrix")
      matrixSequence += e.key.toLowerCase();
      matrixSequence = matrixSequence.slice(-6);
      if (matrixSequence === 'matrix') {
        const matrixBg = document.querySelector('[data-matrix-bg]');
        if (matrixBg) {
          matrixBg.classList.add('matrix-intense');
          console.log('%c🔮 Matrix mode activated. You\'re The One.', 'color: #10b981; font-size: 14px; font-weight: bold;');
          setTimeout(() => {
            matrixBg.classList.remove('matrix-intense');
          }, 5000);
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <AuthProvider>
      <BookmarkProvider>
        {children}
      </BookmarkProvider>
    </AuthProvider>
  );
}
