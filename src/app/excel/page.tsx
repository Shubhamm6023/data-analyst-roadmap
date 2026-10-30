import Link from "next/link";

export default function Excel() {
  const modules = [
    { title: "Excel Basics", hindi: "?????? ??? ?????", lessons: 8, progress: 0 },
    { title: "Formulas & Functions", hindi: "???????? ?? ??????", lessons: 12, progress: 0 },
    { title: "Data Analysis Tools", hindi: "???? ???????? ?????", lessons: 10, progress: 0 },
    { title: "Pivot Tables & Charts", hindi: "???? ???? ?? ?????", lessons: 8, progress: 0 },
    { title: "Dashboards", hindi: "????????", lessons: 6, progress: 0 },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">EX</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Excel Mastery Academy</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Excel Mastery Academy</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Master Microsoft Excel for Data Analysis from Beginner to Advanced</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => (
            <div key={idx} className="card p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--foreground)' }}>{module.title}</h3>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>{module.hindi}</p>
              <p className="text-sm mb-4" style={{ color: 'var(--foreground-secondary)' }}>{module.lessons} lessons</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: module.progress + '%' }}></div>
              </div>
              <button className="btn-primary w-full text-sm">Start Module</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
