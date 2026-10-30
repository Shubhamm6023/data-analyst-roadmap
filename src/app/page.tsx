import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">F01</span>
              </div>
              <span className="text-xl font-bold gradient-text">Future01</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors" style={{ color: 'var(--foreground-secondary)' }}>Features</a>
              <a href="#roadmap" className="text-sm font-medium hover:text-primary transition-colors" style={{ color: 'var(--foreground-secondary)' }}>Roadmap</a>
              <a href="#resources" className="text-sm font-medium hover:text-primary transition-colors" style={{ color: 'var(--foreground-secondary)' }}>Resources</a>
              <Link href="/dashboard" className="btn-primary text-sm">Start Learning</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Learn Skills. <span className="gradient-text">Analyze Data.</span> Build Your Future.
          </h1>
          <p className="text-xl sm:text-2xl mb-4 font-medium" style={{ color: 'var(--foreground-secondary)' }}>
            Start from Zero. Become Job Ready.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: 'var(--foreground-secondary)' }}>
            FUTURE01 - Complete Data Analyst Learning Platform designed for beginners, especially UP Board students. 
            Master Excel, SQL, Python, Statistics, Power BI with Hindi/Hinglish support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary text-base px-8 py-3">
              Start Learning Journey
            </Link>
            <Link href="/roadmap" className="btn-secondary text-base px-8 py-3">
              Explore Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Everything You Need to Become a Data Analyst
            </h2>
            <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
              Comprehensive learning platform with all the tools and resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Hindi/Hinglish Support</h3>
              <p style={{ color: 'var(--foreground-secondary)' }}>Learn in your preferred language - Hindi, English, or Hinglish with technical terms preserved</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Foundation First</h3>
              <p style={{ color: 'var(--foreground-secondary)' }}>Start with Computer Fundamentals, Mathematics, and English for UP Board students</p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Practical Learning</h3>
              <p style={{ color: 'var(--foreground-secondary)' }}>Hands-on projects, SQL playground, Python practice, and real datasets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Ready to Start Your Data Analyst Journey?
          </h2>
          <p className="text-lg mb-8" style={{ color: 'var(--foreground-secondary)' }}>
            Join thousands of students learning Data Analytics from scratch
          </p>
          <Link href="/dashboard" className="btn-primary text-base px-8 py-3">
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F01</span>
            </div>
            <span className="text-xl font-bold gradient-text">Future01</span>
          </div>
          <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
            � 2026 Future01. Learn Skills. Analyze Data. Build Your Future.
          </p>
        </div>
      </footer>
    </div>
  );
}
