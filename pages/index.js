import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const screenshots = [
    {
      src: '/images/screenshot-quotes.png',
      alt: 'CustDive - Quotations from group analysis'
    },
    {
      src: '/images/screenshot-dashboard.png',
      alt: 'CustDive Dashboard - Research Results Analysis'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <>
      <Head>
        <title>CustDive - Validate your startup idea before you build</title>
        <meta name="description" content="CustDive scans Reddit, X, Facebook, and LinkedIn to uncover unmet customer needs and real complaints in your niche." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <main className="min-h-screen">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 via-orange-500 to-green-600 bg-clip-text text-transparent">
                  CustDive
                </span>
                <span className="text-[9px] text-gray-500 mt-0.5 leading-tight">powered by Karhuno AI</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://my.custdive.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 glass glass-hover text-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                >
                  Login
                </a>
                <a
                  href="https://my.custdive.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="gradient-bg-hero pt-32 pb-20 sm:pt-40 sm:pb-24 relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
                Build features backed by evidence.
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                CustDive scans Reddit, X, Facebook, and LinkedIn to surface unmet needs and pain points, so you prioritize what truly matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://my.custdive.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1 hover:scale-105 text-center"
                >
                  Start Research
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Screenshot Carousel Section */}
        <section className="px-4 py-12 -mt-12 relative z-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="screenshot-container relative">
              {/* Carousel */}
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {screenshots.map((screenshot, index) => (
                    <div key={index} className="min-w-full">
                      <Image 
                        src={screenshot.src} 
                        alt={screenshot.alt} 
                        width={1920} 
                        height={1080}
                        className="w-full h-auto screenshot-image-dark"
                        priority={index === 0}
                        quality={100}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-strong rounded-full flex items-center justify-center hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-purple-600 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-32 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-strong p-10 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  Find unmet needs instantly
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  AI scans thousands of real conversations to highlight what people are asking for — and not getting.
                </p>
              </div>
              <div className="glass-strong p-10 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  Discover hidden complaints
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  See what frustrates users in your niche so you avoid building features nobody needs.
                </p>
              </div>
              <div className="glass-strong p-10 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  Validate ideas without guessing
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                  Base your roadmap on real user pain, not assumptions or biased feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 py-32 gradient-bg relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-20">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-28 h-28 glass-strong rounded-3xl shadow-glow flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent relative z-10">1</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                  Choose a niche or competitor to analyze.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-28 h-28 glass-strong rounded-3xl shadow-glow flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent relative z-10">2</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                  CustDive scans Reddit, X, Facebook, and LinkedIn using Karhuno AI.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-28 h-28 glass-strong rounded-3xl shadow-glow flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl font-bold bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent relative z-10">3</span>
                </div>
                <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                  Receive a report of unmet needs, complaints, and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="px-4 py-32 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <div className="glass-strong p-8 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col relative">
                <div className="mb-6">
                  <div className="text-right mb-2">
                    <span className="text-6xl font-bold text-purple-600">$0</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Free</h3>
                  <p className="text-gray-600 text-sm mt-1">By invitation only</p>
                </div>
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">2 research profiles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">1,000 credits (1 research)</span>
                  </div>
                  <div className="flex items-start gap-3 opacity-0 pointer-events-none">
                    <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Hyper search - analyze data based on enriched data (coming soon)</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://my.custdive.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-glow hover:shadow-glow-lg text-center"
                  >
                    Request Invitation
                  </a>
                </div>
              </div>

              {/* Starter Plan */}
              <div className="glass-strong p-8 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col relative">
                <div className="mb-6">
                  <div className="text-right mb-2">
                    <span className="text-6xl font-bold text-orange-600">$39</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Starter</h3>
                </div>
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">2 research profiles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">4,000 credits (4 researches)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Hyper search - analyze data based on enriched data (coming soon)</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://my.custdive.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-xl font-semibold hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-glow hover:shadow-glow-lg text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="glass-strong p-8 rounded-3xl shadow-soft-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col relative">
                <div className="mb-6">
                  <div className="text-right mb-2">
                    <span className="text-6xl font-bold text-green-600">$99</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Pro</h3>
                </div>
                <div className="flex-1 space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">5 research profiles</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">12,000 credits (12 researches)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-gray-500 text-sm">Hyper search - analyze data based on enriched data (coming soon)</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://my.custdive.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-glow hover:shadow-glow-lg text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-16 border-t border-gray-200/50 glass relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 relative">
                  <Image 
                    src="/images/logo.png" 
                    alt="CustDive" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-base text-gray-600 font-semibold">
                  © CustDive — Powered by Karhuno AI
                </p>
              </div>
              <div className="text-xs text-gray-500 text-center sm:text-right">
                <div>team@karhuno.com</div>
                <div className="mt-1">Daring Spirit Oy</div>
                <div>Hiihtomäentie 14, 00810</div>
                <div>Helsinki, Finland</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

