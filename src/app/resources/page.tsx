import Link from "next/link";

export default function Resources() {
  const resources = [
    { title: "NCERT Books (Mathematics)", category: "Foundation", url: "https://ncert.nic.in/", free: true },
    { title: "UPMSP Official Website", category: "UP Board", url: "https://upmsp.edu.in/", free: true },
    { title: "Khan Academy", category: "Mathematics", url: "https://www.khanacademy.org/", free: true },
    { title: "Microsoft Learn - Excel", category: "Excel", url: "https://learn.microsoft.com/training/", free: true },
    { title: "SQLBolt - Learn SQL", category: "SQL", url: "https://sqlbolt.com/", free: true },
    { title: "W3Schools SQL", category: "SQL", url: "https://www.w3schools.com/sql/", free: true },
    { title: "Python.org Tutorials", category: "Python", url: "https://docs.python.org/3/tutorial/", free: true },
    { title: "Kaggle Learn", category: "Data Analysis", url: "https://www.kaggle.com/learn", free: true },
    { title: "Pandas Documentation", category: "Python", url: "https://pandas.pydata.org/docs/", free: true },
    { title: "Power BI Learning", category: "Power BI", url: "https://learn.microsoft.com/power-bi/", free: true },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>? Back to Dashboard</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RS</span>
                </div>
                <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>Free Learning Resources</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Verified Free Resources</h1>
          <p style={{ color: 'var(--foreground-secondary)' }}>Curated free learning resources from trusted platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((resource, idx) => (
            <div key={idx} className="card p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium flex-1" style={{ color: 'var(--foreground)' }}>{resource.title}</h3>
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 ml-2">Free</span>
              </div>
              <span className="inline-block px-2 py-1 text-xs rounded-full mb-3" style={{ background: 'var(--border)', color: 'var(--foreground-secondary)' }}>{resource.category}</span>
              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                Open Resource ?
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
