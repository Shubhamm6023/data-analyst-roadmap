import Link from "next/link";

export default function Career() {
  const roles = [
    { title: "Data Analyst Intern", skills: ["Excel", "SQL", "Basic Analytics"], salary: "Entry Level" },
    { title: "Junior Data Analyst", skills: ["Excel", "SQL", "Python", "Power BI"], salary: "Entry Level" },
    { title: "MIS Executive", skills: ["Excel", "Reports", "Dashboards"], salary: "Entry Level" },
    { title: "Reporting Analyst", skills: ["SQL", "Excel", "Data Visualization"], salary: "Entry Level" },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CR</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Career Center</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Career & Job Preparation Center</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Prepare for entry-level Data Analyst roles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {roles.map((role, idx) => (
            <div key={idx} className="card p-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>{role.title}</h3>
              <p className="text-sm mb-3" style={{ color: 'var(--foreground-secondary)' }}>Level: {role.salary}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {role.skills.map((skill, sidx) => (
                  <span key={sidx} className="px-2 py-1 text-xs rounded-full" style={{ background: 'var(--border)', color: 'var(--foreground)' }}>{skill}</span>
                ))}
              </div>
              <button className="btn-primary text-sm">View Details</button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Resume Builder</div>
          </div>
          <div className="card p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Interview Prep</div>
          </div>
          <div className="card p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-2">??</div>
            <div className="font-medium" style={{ color: 'var(--foreground)' }}>Portfolio Builder</div>
          </div>
        </div>
      </div>
    </div>
  );
}
