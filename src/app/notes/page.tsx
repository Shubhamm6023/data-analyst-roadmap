import Link from "next/link";

export default function Notes() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NT</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Notes & Bookmarks</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>My Notes</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Save and organize your learning notes</p>
        </div>

        <div className="card p-8 text-center">
          <div className="text-4xl mb-4">??</div>
          <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>No notes yet</h2>
          <p className="mb-4" style={{ color: 'var(--foreground-secondary)' }}>Start taking notes while learning</p>
          <button className="btn-primary">Create New Note</button>
        </div>
      </div>
    </div>
  );
}
