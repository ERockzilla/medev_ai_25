'use client';

import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/contexts/BookmarkContext';
import { trackBookmark } from '@/lib/tracking';

interface BookmarkButtonProps {
  title: string;
  url: string;
  type: 'standard' | 'regulation' | 'guide' | 'how-to' | 'tool' | 'page';
  className?: string;
}

export default function BookmarkButton({ title, url, type, className = '' }: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(url);

  const handleClick = () => {
    // Track bookmark action (only when adding, not removing)
    if (!bookmarked) {
      trackBookmark(title, url);
    }
    toggleBookmark({ title, url, type });
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${bookmarked
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        } ${className}`}
      title={bookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
    >
      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
      <span className="text-sm font-medium">
        {bookmarked ? 'Bookmarked' : 'Bookmark'}
      </span>
    </button>
  );
}


