import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Resources</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Templates, guides, and tools for medical device professionals
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
          <p className="text-slate-300 text-center">Resources coming soon...</p>
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Globe
          </Link>
        </div>
      </div>
    </main>
  );
}

