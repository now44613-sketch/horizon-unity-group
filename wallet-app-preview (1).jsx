import React, { useState } from 'react';

export default function WalletApp() {
  const [showInviteModal, setShowInviteModal] = useState(true);

  // Icon Components
  const Search = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.3-4.3"/>
    </svg>
  );

  const X = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  );

  const Plus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
      <path d="M12 5v14"/>
    </svg>
  );

  const Building2 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/>
      <path d="M10 10h4"/>
      <path d="M10 14h4"/>
      <path d="M10 18h4"/>
    </svg>
  );

  const MessageCircle = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
    </svg>
  );

  const DollarSign = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  );

  const UserPlus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" x2="19" y1="8" y2="14"/>
      <line x1="22" x2="16" y1="11" y2="11"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-white px-4 py-4 flex items-center justify-between border-b border-gray-100">
          {/* Profile Avatar */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              JW
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-5 py-2.5 bg-gray-100 rounded-full text-sm font-medium text-gray-900 hover:bg-gray-200 transition">
              Invite
            </button>
            <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <Search />
            </button>
          </div>
        </div>

        {/* Balance Card */}
        <div className="px-4 pt-6 pb-4">
          <div className="bg-gray-100 rounded-3xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-1">KESO</h2>
                <p className="text-2xl text-gray-400 font-medium">US$0.00</p>
              </div>
              <button className="p-2 hover:bg-gray-200 rounded-lg transition">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
                  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
                  <circle cx="12" cy="19" r="1.5" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="px-4 pb-6">
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-200 transition active:scale-95">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Plus />
              </div>
              <span className="text-base font-semibold text-gray-900">Add money</span>
            </button>
            
            <button className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-gray-200 transition active:scale-95">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Building2 />
              </div>
              <span className="text-base font-semibold text-gray-900">Account details</span>
            </button>
          </div>
        </div>

        {/* Invite Card */}
        {showInviteModal && (
          <div className="px-4 pb-6">
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-6 relative overflow-hidden">
              <button 
                className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition"
                onClick={() => setShowInviteModal(false)}
              >
                <X />
              </button>
              
              {/* Icons */}
              <div className="flex gap-2 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                  <MessageCircle />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                  <DollarSign />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
                  <UserPlus />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-gray-900">Invite people,</h3>
                <h3 className="text-2xl font-bold text-gray-900">earn up to US$10.00.</h3>
                <p className="text-xl font-semibold text-gray-900">Sharing is caring.</p>
              </div>
            </div>
          </div>
        )}

        {/* Today Section */}
        <div className="px-4 pb-4">
          <h3 className="text-lg font-semibold text-gray-600 mb-4">Today</h3>
          
          {/* Placeholder for activity items */}
          <div className="space-y-3">
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/2 animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-2/3 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/3 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="px-4 pb-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your activity feed</h3>
            <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
              When you add, withdraw, send, and receive money it shows up here. Get started by adding money.
            </p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200">
          <div className="px-4 py-3">
            <p className="text-center text-sm text-gray-600 mb-3">
              Pay <span className="font-semibold">anyone</span> in{' '}
              <button className="font-semibold underline hover:text-gray-900">140+ countries</button>. 
              Tap the button below to get started.
            </p>
            
            <div className="grid grid-cols-2 gap-3 pb-2">
              <button className="py-4 px-6 bg-gray-100 rounded-full text-base font-semibold text-gray-900 hover:bg-gray-200 transition active:scale-95">
                Request
              </button>
              <button className="py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-base font-semibold text-white hover:from-orange-600 hover:to-orange-700 transition shadow-lg shadow-orange-500/30 active:scale-95">
                Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
