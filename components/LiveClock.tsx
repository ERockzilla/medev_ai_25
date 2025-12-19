'use client';

/**
 * Live Clock and Session Timer Component
 * Shows current date/time with seconds and tracks time spent in app
 */

import { useState, useEffect } from 'react';

export default function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeSpent, setTimeSpent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to avoid hydration mismatch
    setMounted(true);

    // Update current time every second
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Track time spent in app (stopwatch)
    const stopwatchInterval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(stopwatchInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatStopwatch = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hrs > 0) {
      return `${hrs}h ${mins}m ${secs}s`;
    } else if (mins > 0) {
      return `${mins}m ${secs}s`;
    } else {
      return `${secs}s`;
    }
  };

  // Prevent hydration mismatch by showing placeholder until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end gap-0.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-sm">
          <div className="text-xs font-semibold text-gray-900 tabular-nums">
            --:--:-- --
          </div>
          <div className="text-[10px] text-gray-600 font-medium">
            --- --, ----
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 shadow-sm">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
          <div className="flex flex-col items-start gap-0.5">
            <div className="text-[10px] text-gray-600 font-medium uppercase tracking-wide">
              Session
            </div>
            <div className="text-xs font-semibold text-gray-900 tabular-nums">
              0s
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      {/* Current Date & Time */}
      <div className="flex flex-col items-end gap-0.5 px-3 py-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200/50 shadow-sm">
        <div className="text-xs font-semibold text-gray-900 tabular-nums">
          {formatTime(currentTime)}
        </div>
        <div className="text-[10px] text-gray-600 font-medium">
          {formatDate(currentTime)}
        </div>
      </div>

      {/* Time Spent Stopwatch */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 shadow-sm">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="flex flex-col items-start gap-0.5">
          <div className="text-[10px] text-gray-600 font-medium uppercase tracking-wide">
            Session
          </div>
          <div className="text-xs font-semibold text-gray-900 tabular-nums">
            {formatStopwatch(timeSpent)}
          </div>
        </div>
      </div>
    </div>
  );
}
