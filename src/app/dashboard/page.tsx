import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F01</span>
                </div>
                <span className="text-xl font-bold gradient-text">Future01</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Welcome, Student</span>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Overview Dashboard</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Start your Data Analyst journey from here</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Overall Progress</p>
                <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>0%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Lessons Completed</p>
                <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>0</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Projects Completed</p>
                <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>0</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Study Streak</p>
                <p className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>0 Days</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Modules */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Learning Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/foundation" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <span className="text-lg">???</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Foundation Academy</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Computer Basics, Mathematics, English Foundation</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>

            <Link href="/excel" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <span className="text-lg">??</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Excel Mastery</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Formulas, Pivot Tables, Dashboards</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>

            <Link href="/sql" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                  <span className="text-lg">???</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>SQL Mastery</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Queries, Joins, Subqueries, Analytics</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>

            <Link href="/python" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center">
                  <span className="text-lg">??</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Python for Data</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Pandas, NumPy, Data Analysis</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>

            <Link href="/statistics" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                  <span className="text-lg">??</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Statistics</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Descriptive & Inferential Statistics</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>

            <Link href="/powerbi" className="card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                  <span className="text-lg">??</span>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Power BI</h3>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Dashboards, DAX, Visualizations</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/roadmap" className="card p-4 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">???</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Complete Roadmap</div>
          </Link>
          <Link href="/projects" className="card p-4 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Projects</div>
          </Link>
          <Link href="/practice" className="card p-4 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Practice Lab</div>
          </Link>
          <Link href="/resources" className="card p-4 text-center hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Resources</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
