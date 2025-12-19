import Link from 'next/link';

// Simple Icons (No external library needed)
const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mb-3 text-blue-400">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const LaserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mb-3 text-emerald-400">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 inline-block">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            About medev.ai
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expanding medical device intelligence for the next generation of innovators.
          </p>
        </div>

        {/* Introduction Text */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 space-y-6 text-slate-300 shadow-xl mb-12">
          <p className="leading-relaxed text-lg">
            We believe that knowledge about medical device development from regulatory pathways to laser physics should be accessible to everyone. That is why we built <strong className="text-white">medev.ai</strong>: a free, open-source intelligence platform designed to demystify the industry for engineers, regulatory professionals, and innovators.
          </p>
        </div>

        {/* The "Choice" UX Section: Visualizing the Connection */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card 1: Medev.ai (Learning) */}
          <div className="relative group bg-slate-800/80 rounded-xl p-8 border border-blue-900/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            <BookIcon />
            <h3 className="text-xl font-semibold text-white mb-2">Explore & Learn</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[80px]">
              Use medev.ai to research standards, simulate regulatory strategies, and build your technical foundation without barriers.
            </p>
            <Link 
              href="/dashboard" 
              className="relative z-10 inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
             <span className="ml-2">← </span> Back to Dashboard 
            </Link>
          </div>

          {/* Card 2: BW Tek (Building) */}
          <div className="relative group bg-slate-800/80 rounded-xl p-8 border border-emerald-900/50 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
            <LaserIcon />
            <h3 className="text-xl font-semibold text-white mb-2">Build & Manufacture</h3>
            <p className="text-slate-400 text-sm mb-6 min-h-[80px]">
              Ready to transition from learning to building? Our partner <strong className="text-white">BWtek Medical</strong> provides certified design and manufacturing for laser systems.
            </p>
            <a 
              href="https://bwtekmed.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              Visit bwtekmed.com <ExternalLinkIcon />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}