import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">ChronoTask</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#solutions" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Solutions</a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Resources</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Sign in
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-2.5 rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
              Get demo
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="relative">
          {/* Decorative Elements */}

          {/* Sticky Note - Top Left */}
          <div className="absolute -left-8 top-0 md:left-0 animate-float-slow hidden md:block">
            <div className="relative w-56 h-56 transform -rotate-6">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-lg shadow-xl">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-6 bg-red-500 rounded-full shadow-md" />
                <div className="p-6 pt-12">
                  <p className="text-gray-800 font-handwriting text-sm leading-relaxed" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    Take notes to keep track of crucial details, and accomplish more tasks with ease.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkmark Icon - Below Sticky Note */}
          <div className="absolute left-4 top-64 md:left-8 animate-float hidden md:block">
            <div className="glass-card w-20 h-20 flex items-center justify-center p-4">
              <Image
                src="/checkmark-icon.png"
                alt="Checkmark"
                width={48}
                height={48}
                className="drop-shadow-lg"
              />
            </div>
          </div>

          {/* Center App Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 animate-float hidden md:block">
            <div className="glass-card w-24 h-24 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Timer Icon - Top Right */}
          <div className="absolute right-0 top-12 md:right-12 animate-float-slow hidden md:block">
            <div className="glass-card w-20 h-20 flex items-center justify-center">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-5 bg-gray-800 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45"></div>
                <div className="absolute -top-2 left-1/2 w-2 h-3 bg-gray-800 rounded-t transform -translate-x-1/2"></div>
              </div>
            </div>
          </div>

          {/* Reminder Card - Right Side */}
          <div className="absolute right-0 top-40 md:right-4 animate-float hidden md:block">
            <div className="glass-card w-52 p-4 transform rotate-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="w-6 h-1 bg-gray-800"></div>
                  <div className="absolute w-1 h-4 bg-gray-800 transform rotate-90"></div>
                </div>
                <span className="text-sm font-semibold text-gray-800">Reminders</span>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <p className="text-xs text-gray-600 mb-2">Today&apos;s Meeting</p>
                <p className="text-xs text-gray-500 mb-2">Meeting in 2 hours</p>
                <div className="flex items-center gap-1 text-cyan-500 text-xs font-medium">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>13:00 - 13:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto pt-20 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Think, plan, and track
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent mb-8">
              all in one place
            </h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Efficiently manage your tasks and boost productivity.
            </p>
            <Link
              href="/demo"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get free demo
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-32 max-w-5xl mx-auto">
            {/* Today's Tasks Card */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s tasks</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 bg-orange-500 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New ideas for campaign</p>
                    <p className="text-xs text-gray-500">Sep 10</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="-space-x-2 flex">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-900">60%</span>
                  </div>
                </div>
                <div className="ml-10 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 border-2 border-green-600 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Design PPT #4</p>
                    <p className="text-xs text-gray-500">Sep 15</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white"></div>
                    <span className="text-xs font-medium text-gray-900">132%</span>
                  </div>
                </div>
                <div className="ml-10 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-red-400 to-pink-500 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Integrations Card */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">100+ Integrations</h3>
              <div className="flex items-center justify-center gap-6 py-8">
                <div className="glass-card w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform">
                  <div className="text-4xl">📧</div>
                </div>
                <div className="glass-card w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>
                <div className="glass-card w-20 h-20 flex items-center justify-center transform hover:scale-110 transition-transform">
                  <div className="text-4xl">📅</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
