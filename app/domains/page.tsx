import { DOMAINS } from '@/components/domainsData';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DomainsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Core Domains</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need for medical device development and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOMAINS.map((domain) => (
            <div
              key={domain.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all"
            >
              <div className="text-4xl mb-4">{domain.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{domain.name}</h3>
              <p className="text-slate-300 mb-6">{domain.description}</p>
              <div className="space-y-2">
                {domain.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-slate-400">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

