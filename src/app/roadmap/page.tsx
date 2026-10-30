import Link from "next/link";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1: Foundation (1-2 Months)",
      color: "blue",
      items: [
        "Computer Fundamentals",
        "Mathematics Foundation (UP Board Level)",
        "English Technical Vocabulary",
        "Data Analytics Basics"
      ]
    },
    {
      phase: "Phase 2: Core Tools (2-3 Months)",
      color: "green",
      items: [
        "Excel Mastery",
        "SQL Fundamentals & Advanced",
        "Data Cleaning & Analysis"
      ]
    },
    {
      phase: "Phase 3: Programming (2-3 Months)",
      color: "purple",
      items: [
        "Python for Data Analytics",
        "Pandas & NumPy",
        "Data Visualization with Python"
      ]
    },
    {
      phase: "Phase 4: Statistics & BI (1-2 Months)",
      color: "red",
      items: [
        "Statistics for Data Analysts",
        "Power BI Basics to Advanced",
        "Dashboard Creation"
      ]
    },
    {
      phase: "Phase 5: Projects & Career (1-2 Months)",
      color: "orange",
      items: [
        "Real-world Projects",
        "Portfolio Building",
        "Resume & Interview Preparation",
        "Job Search Strategy"
      ]
    }
  ];

  const getColorClass = (color: string) => {
    const colors: any = {
      blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      green: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      red: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    };
    return colors[color] || colors.blue;
  };

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
                <span className="text-xl font-bold gradient-text">Complete Roadmap</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Data Analyst Journey Roadmap</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Step by step path from zero to job-ready</p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, idx) => (
            <div key={idx} className="card p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>{phase.phase}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {phase.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center space-x-2 p-2 rounded-lg" style={{ background: 'var(--background)' }}>
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span className="text-sm" style={{ color: 'var(--foreground)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/foundation" className="btn-primary text-base px-8 py-3">
            Start with Foundation Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
