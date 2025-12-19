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
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

const DEFAULT_BOOKMARKS: BookmarkItem[] = [
  { id: '1', title: 'ISO 13485 - QMS', url: '/standards/iso-13485', type: 'standard', addedAt: Date.now() },
  { id: '2', title: 'FMEA Calculator', url: '/tools/fmea-calculator', type: 'tool', addedAt: Date.now() },
  { id: '3', title: '21 CFR Part 820', url: '/regulations/cfr-820', type: 'regulation', addedAt: Date.now() },
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

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark, isBookmarked, toggleBookmark }}>
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

