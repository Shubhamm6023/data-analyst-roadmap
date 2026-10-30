import Link from "next/link";

export default function Practice() {
  const labs = [
    { title: "Excel Practice Lab", icon: "??", count: 50, color: "green" },
    { title: "SQL Practice Lab", icon: "???", count: 100, color: "purple" },
    { title: "Python Practice Lab", icon: "??", count: 75, color: "yellow" },
    { title: "Pandas Practice", icon: "??", count: 40, color: "blue" },
    { title: "Statistics Practice", icon: "??", count: 60, color: "red" },
    { title: "Visualization Practice", icon: "??", count: 35, color: "orange" },
  ];

  const getColorClass = (color: string) => {
    const colors: any = {
      green: "bg-green-100 dark:bg-green-900/20",
      purple: "bg-purple-100 dark:bg-purple-900/20",
      yellow: "bg-yellow-100 dark:bg-yellow-900/20",
      blue: "bg-blue-100 dark:bg-blue-900/20",
      red: "bg-red-100 dark:bg-red-900/20",
      orange: "bg-orange-100 dark:bg-orange-900/20",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PL</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Practice Laboratory</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Interactive Practice Laboratory</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Sharpen your skills with hands-on exercises</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, idx) => (
            <div key={idx} className="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg ${getColorClass(lab.color)} flex items-center justify-center text-2xl`}>
                  {lab.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{lab.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>{lab.count} exercises</p>
                </div>
              </div>
              <button className="btn-primary w-full text-sm">Start Practicing</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
