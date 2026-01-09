'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FEED_ITEMS, FeedItem } from '@/lib/feedConfig';

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

// 2. Generate Dynamic RSS Defaults (Top 5 recent articles)
const now = new Date();
const rssDefaults: BookmarkItem[] = FEED_ITEMS
  .filter(item => item.status === 'published' || (item.status === 'scheduled' && new Date(item.date) <= now))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5)
  .map((item, index) => ({
    id: `rss-${index + 1}`,
    title: item.title,
    url: item.url,
    type: 'page', // Treat external articles as generic pages
    addedAt: Date.now(),
  }));

const DEFAULT_BOOKMARKS: BookmarkItem[] = [...STATIC_DEFAULTS, ...rssDefaults];

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

