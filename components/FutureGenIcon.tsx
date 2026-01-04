'use client';

interface FutureGenIconProps {
    className?: string;
    size?: number;
}

// Custom Future Generations icon - represents evolution/growth of AI generations
// Design: A stylized tree with branches growing upward, symbolizing generational progression
export default function FutureGenIcon({ className = '', size = 24 }: FutureGenIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {/* Main trunk - representing core evolution */}
            <path d="M12 22V12" />

            {/* Gen 4-5 branches - lower level */}
            <path d="M12 18L8 14" />
            <path d="M12 18L16 14" />

            {/* Gen 6-7 branches - middle level */}
            <path d="M12 14L7 9" />
            <path d="M12 14L17 9" />

            {/* Gen 8-9-10 branches - top level (future) */}
            <path d="M12 10L6 4" />
            <path d="M12 10L18 4" />
            <path d="M12 10V2" />

            {/* Growth nodes - representing each generation milestone */}
            <circle cx="8" cy="14" r="1.5" fill="currentColor" />
            <circle cx="16" cy="14" r="1.5" fill="currentColor" />
            <circle cx="7" cy="9" r="1.5" fill="currentColor" />
            <circle cx="17" cy="9" r="1.5" fill="currentColor" />
            <circle cx="6" cy="4" r="1.5" fill="currentColor" />
            <circle cx="12" cy="2" r="1.5" fill="currentColor" />
            <circle cx="18" cy="4" r="1.5" fill="currentColor" />
        </svg>
    );
}
