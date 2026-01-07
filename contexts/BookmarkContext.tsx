'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface BookmarkItem {
  id: string;
  title: string;
  url: string;
  type: 'standard' | 'regulation' | 'guide' | 'how-to' | 'tool' | 'page';
  addedAt: number;
}

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  addBookmark: (bookmark: Omit<BookmarkItem, 'id' | 'addedAt'>) => void;
  removeBookmark: (id: string) => void;
  isBookmarked: (url: string) => boolean;
  toggleBookmark: (bookmark: Omit<BookmarkItem, 'id' | 'addedAt'>) => void;
  resetToDefaults: () => void;
  getSiteBookmarks: () => BookmarkItem[];
  getRSSBookmarks: () => BookmarkItem[];
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const DEFAULT_BOOKMARKS: BookmarkItem[] = [
  // Core Standards
  { id: '1', title: 'ISO 13485 - QMS', url: '/standards/iso-13485', type: 'standard', addedAt: Date.now() },
  { id: '2', title: 'ISO 14971 - Risk Management', url: '/standards/iso-14971', type: 'standard', addedAt: Date.now() },
  { id: '3', title: 'IEC 62304 - Software Lifecycle', url: '/standards/iec-62304', type: 'standard', addedAt: Date.now() },
  { id: '4', title: 'IEC 60601-1 - General Safety', url: '/standards/iec-60601-1', type: 'standard', addedAt: Date.now() },
  { id: '5', title: 'IEC 62366 - Usability Engineering', url: '/standards/iec-62366', type: 'standard', addedAt: Date.now() },

  // Key Regulations
  { id: '6', title: '21 CFR Part 820', url: '/regulations/cfr-820', type: 'regulation', addedAt: Date.now() },

  // Essential Tools
  { id: '7', title: 'FMEA Calculator', url: '/tools/fmea', type: 'tool', addedAt: Date.now() },
  { id: '8', title: 'Device Classification', url: '/tools/device-classification', type: 'tool', addedAt: Date.now() },
  { id: '9', title: 'Regulatory Pathway Finder', url: '/tools/regulatory-pathway', type: 'tool', addedAt: Date.now() },
  { id: '10', title: 'Laser Safety Calculator', url: '/tools/laser-safety', type: 'tool', addedAt: Date.now() },
  { id: '11', title: 'Software Risk Classification', url: '/tools/software-risk-class', type: 'tool', addedAt: Date.now() },

  // Guides
  { id: '12', title: 'Guide: Integrated Risk Management', url: '/guides/integrated-risk-management', type: 'guide', addedAt: Date.now() },
  { id: '13', title: 'Guide: Usability Engineering', url: '/guides/usability-engineering', type: 'guide', addedAt: Date.now() },

  // How-To's
  { id: '14', title: 'How To: Conduct FMEA Analysis', url: '/how-to/conduct-fmea-analysis', type: 'how-to', addedAt: Date.now() },
  { id: '15', title: 'How To: Design Development (ISO 13485)', url: '/how-to/design-development-iso13485', type: 'how-to', addedAt: Date.now() },
];

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('medev-bookmarks');
    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        setBookmarks(DEFAULT_BOOKMARKS);
      }
    } else {
      setBookmarks(DEFAULT_BOOKMARKS);
    }
  }, []);

  // Save bookmarks to localStorage
  useEffect(() => {
    if (bookmarks.length > 0) {
      localStorage.setItem('medev-bookmarks', JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const addBookmark = (bookmark: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
    const newBookmark: BookmarkItem = {
      ...bookmark,
      id: Date.now().toString(),
      addedAt: Date.now(),
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
  };

  const isBookmarked = (url: string) => {
    return bookmarks.some(b => b.url === url);
  };

  const toggleBookmark = (bookmark: Omit<BookmarkItem, 'id' | 'addedAt'>) => {
    const existing = bookmarks.find(b => b.url === bookmark.url);
    if (existing) {
      removeBookmark(existing.id);
    } else {
      addBookmark(bookmark);
    }
  };

  const resetToDefaults = () => {
    localStorage.removeItem('medev-bookmarks');
    setBookmarks(DEFAULT_BOOKMARKS);
  };

  // Filter to get only internal site bookmarks (URLs starting with /)
  const getSiteBookmarks = () => {
    return bookmarks.filter(b => b.url.startsWith('/'));
  };

  // Filter to get only external/RSS bookmarks (URLs not starting with /)
  const getRSSBookmarks = () => {
    return bookmarks.filter(b => !b.url.startsWith('/'));
  };

  return (
    <BookmarkContext.Provider value={{
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked,
      toggleBookmark,
      resetToDefaults,
      getSiteBookmarks,
      getRSSBookmarks,
    }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

