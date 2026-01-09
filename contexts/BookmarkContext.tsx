'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FEED_ITEMS } from '@/lib/feedConfig';

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

// Version for default bookmarks - increment when defaults change to force refresh
const DEFAULTS_VERSION = 2;

// 1. Static curated defaults
const STATIC_DEFAULTS: BookmarkItem[] = [
  // Standard
  { id: '1', title: 'ISO 13485 - QMS', url: '/standards/iso-13485', type: 'standard', addedAt: Date.now() },
  // Regulation
  { id: '2', title: 'eSTAR Template', url: '/regulations/estar-template', type: 'regulation', addedAt: Date.now() },
  // Guides
  { id: '3', title: 'Guide: Medical Laser Implementation', url: '/guides/medical-laser-implementation', type: 'guide', addedAt: Date.now() },
  { id: '4', title: 'Guide: Integrated Risk Management', url: '/guides/integrated-risk-management', type: 'guide', addedAt: Date.now() },
  // Tool
  { id: '5', title: 'Regulatory Pathway Advisor', url: '/tools/regulatory-pathway', type: 'tool', addedAt: Date.now() },
  // How-To
  { id: '6', title: 'How To: Design & Development (ISO 13485)', url: '/how-to/design-development-iso13485', type: 'how-to', addedAt: Date.now() },
];

// 2. Generate Dynamic RSS Defaults (Top 5 recent published articles)
function generateRssDefaults(): BookmarkItem[] {
  const now = new Date();
  return FEED_ITEMS
    .filter(item => item.status === 'published' || (item.status === 'scheduled' && new Date(item.date) <= now))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
    .map((item, index): BookmarkItem => ({
      id: `rss-${index + 1}`,
      title: item.title,
      url: item.url,
      type: 'page' as const,
      addedAt: Date.now(),
    }));
}

function getDefaultBookmarks(): BookmarkItem[] {
  return [...STATIC_DEFAULTS, ...generateRssDefaults()];
}

export function BookmarkProvider({ children }: { children: ReactNode }) {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const savedVersion = localStorage.getItem('medev-bookmarks-version');
    const saved = localStorage.getItem('medev-bookmarks');

    // Force refresh if version changed or no version exists
    if (!savedVersion || parseInt(savedVersion) < DEFAULTS_VERSION) {
      const defaults = getDefaultBookmarks();
      setBookmarks(defaults);
      localStorage.setItem('medev-bookmarks', JSON.stringify(defaults));
      localStorage.setItem('medev-bookmarks-version', DEFAULTS_VERSION.toString());
      return;
    }

    if (saved) {
      try {
        setBookmarks(JSON.parse(saved));
      } catch (e) {
        const defaults = getDefaultBookmarks();
        setBookmarks(defaults);
      }
    } else {
      setBookmarks(getDefaultBookmarks());
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
    localStorage.setItem('medev-bookmarks-version', DEFAULTS_VERSION.toString());
    setBookmarks(getDefaultBookmarks());
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

