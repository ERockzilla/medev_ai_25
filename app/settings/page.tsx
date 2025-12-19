'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import MatrixBackground from '@/components/MatrixBackground';
import Header from '@/components/Header';

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'preferences'>('profile');

  // Form states
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  const handleSaveProfile = () => {
    alert('Profile settings saved!');
  };

  const handleSavePreferences = () => {
    alert('Preferences saved!');
  };

  return (
    <div className="min-h-screen relative">
      <MatrixBackground intensity="low" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />

        {/* Main Content */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account settings and preferences</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="card">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeTab === 'profile'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    👤 Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('preferences')}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${activeTab === 'preferences'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    ⚙️ Preferences
                  </button>
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={user?.username || ''}
                        disabled
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-500 mt-1">Username cannot be changed</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role
                      </label>
                      <input
                        type="text"
                        value={user?.role || ''}
                        disabled
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-500 cursor-not-allowed"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleSaveProfile}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preferences' && (
                <div className="card">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">Email Notifications</div>
                            <div className="text-sm text-gray-600">Receive updates about your account</div>
                          </div>
                          <button
                            onClick={() => setEmailNotifications(!emailNotifications)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">Marketing Emails</div>
                            <div className="text-sm text-gray-600">Receive news and product updates</div>
                          </div>
                          <button
                            onClick={() => setMarketingEmails(!marketingEmails)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${marketingEmails ? 'bg-blue-600' : 'bg-gray-300'
                              }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${marketingEmails ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleSavePreferences}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
                      >
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

