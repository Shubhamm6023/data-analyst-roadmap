export interface Lesson {
  id: number;
  title: string;
  hindi: string;
  content?: string;
  objectives?: string[];
  duration?: string;
  status?: 'pending' | 'in-progress' | 'completed';
}

export interface Module {
  id: string;
  title: string;
  hindi: string;
  description: string;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessons: number[];
  currentLesson?: number;
  moduleProgress: { [key: string]: number };
}