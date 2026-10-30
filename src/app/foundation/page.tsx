import Link from "next/link";
import { foundationModules } from "@/data/foundation";

export default function Foundation() {
  const modules = foundationModules;

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F01</span>
                </div>
                <span className="text-xl font-bold gradient-text">Foundation Academy</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Foundation Academy</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Build your base - Computer, Mathematics and English for Data Analytics</p>
        </div>

        {modules.map((module, idx) => (
          <div key={idx} className="mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{module.title}</h2>
              <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>{module.description}</p>
            </div>
            <div className="space-y-3">
              {module.lessons.map((lesson) => (
                <Link key={lesson.id} href={`/lesson/${lesson.id}`}>
                  <div className="card p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: 'var(--border)' }}>
                        <span className="text-sm">{lesson.id}</span>
                      </div>
                      <div>
                        <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>{lesson.title}</h3>
                        <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>{lesson.hindi}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {lesson.duration && (
                        <span className="text-xs" style={{ color: 'var(--foreground-secondary)' }}>{lesson.duration}</span>
                      )}
                      <span className="text-sm px-2 py-1 rounded-full" style={{ background: 'var(--border)', color: 'var(--foreground-secondary)' }}>Not Started</span>
                      <svg className="w-5 h-5" style={{ color: 'var(--foreground-secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
