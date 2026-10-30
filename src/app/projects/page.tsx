import Link from "next/link";

export default function Projects() {
  const beginnerProjects = [
    { title: "Student Marks Analysis", difficulty: "Beginner", tools: "Excel" },
    { title: "Monthly Expense Analysis", difficulty: "Beginner", tools: "Excel" },
    { title: "Simple Sales Analysis", difficulty: "Beginner", tools: "Excel/SQL" },
  ];
  const intermediateProjects = [
    { title: "E-commerce Sales Analysis", difficulty: "Intermediate", tools: "SQL + Excel" },
    { title: "Customer Segmentation", difficulty: "Intermediate", tools: "Python + Pandas" },
    { title: "HR Analytics", difficulty: "Intermediate", tools: "Power BI" },
  ];
  const advancedProjects = [
    { title: "End-to-End Retail Analytics", difficulty: "Advanced", tools: "Python + SQL + Power BI" },
    { title: "Customer Churn Analysis", difficulty: "Advanced", tools: "Python + ML Concepts" },
    { title: "Business Performance Dashboard", difficulty: "Advanced", tools: "Power BI" },
  ];

  const getBadgeColor = (diff: string) => {
    if (diff === "Beginner") return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
    if (diff === "Intermediate") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
    if (diff === "Advanced") return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PR</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Real-World Projects</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Project-Based Learning</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Build portfolio-worthy projects with real datasets</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Beginner Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beginnerProjects.map((project, idx) => (
              <div key={idx} className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getBadgeColor(project.difficulty)}`}>{project.difficulty}</span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Tools: {project.tools}</p>
                <button className="text-sm text-primary hover:underline">View Project ?</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Intermediate Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {intermediateProjects.map((project, idx) => (
              <div key={idx} className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getBadgeColor(project.difficulty)}`}>{project.difficulty}</span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Tools: {project.tools}</p>
                <button className="text-sm text-primary hover:underline">View Project ?</button>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Advanced Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advancedProjects.map((project, idx) => (
              <div key={idx} className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium" style={{ color: 'var(--foreground)' }}>{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getBadgeColor(project.difficulty)}`}>{project.difficulty}</span>
                </div>
                <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Tools: {project.tools}</p>
                <button className="text-sm text-primary hover:underline">View Project ?</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
