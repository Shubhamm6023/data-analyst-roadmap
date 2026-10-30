import Link from "next/link";
import { notFound } from "next/navigation";
import { foundationModules } from "@/data/foundation";

export function generateStaticParams() {
  const params = [];
  for (const module of foundationModules) {
    for (const lesson of module.lessons) {
      params.push({ id: lesson.id.toString() });
    }
  }
  return params;
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lessonId = parseInt(id);
  
  // Find lesson across all foundation modules
  let lesson = null;
  let module = null;
  for (const m of foundationModules) {
    const found = m.lessons.find(l => l.id === lessonId);
    if (found) {
      lesson = found;
      module = m;
      break;
    }
  }
  
  if (!lesson || !module) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/foundation" className="text-sm hover:text-primary" style={{ color: 'var(--foreground-secondary)' }}>← Back to Foundation</Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F01</span>
                </div>
                <span className="text-xl font-bold gradient-text">Lesson {lesson.id}</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="mb-4">
            <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'var(--border)', color: 'var(--foreground-secondary)' }}>
              {module.title}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{lesson.title}</h1>
          <p className="text-xl mb-2" style={{ color: 'var(--foreground-secondary)' }}>{lesson.hindi}</p>
          {lesson.duration && (
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Duration: {lesson.duration}</p>
          )}
        </div>

        <div className="card p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Learning Objectives</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span style={{ color: 'var(--foreground)' }}>Understand the concept thoroughly</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span style={{ color: 'var(--foreground)' }}>Apply knowledge in practical scenarios</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary mt-1">•</span>
              <span style={{ color: 'var(--foreground)' }}>Solve practice questions</span>
            </li>
          </ul>
        </div>

        <div className="card p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Content</h2>
          <div className="prose max-w-none" style={{ color: 'var(--foreground)' }}>
            <p className="mb-4">
              This lesson covers {lesson.title} in detail. Content will be expanded with Hindi explanations, 
              examples, and practical exercises.
            </p>
            <p style={{ color: 'var(--foreground-secondary)' }}>
              🚧 This lesson content is being developed. More detailed material coming soon!
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          {lessonId > 1 ? (
            <Link href={`/lesson/${lessonId - 1}`} className="btn-secondary">
              ← Previous Lesson
            </Link>
          ) : (
            <div></div>
          )}
          <button className="btn-primary">Mark as Complete</button>
          {lessonId < 13 ? (
            <Link href={`/lesson/${lessonId + 1}`} className="btn-secondary">
              Next Lesson →
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
