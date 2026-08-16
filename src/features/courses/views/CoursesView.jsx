import React, { useState } from 'react'
import { MainLayout } from '../../../shared/components/MainLayout'
import { coursesData } from '../data/coursesData'
import { 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Terminal, 
  ScanSearch, 
  ShieldAlert, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Play,
  X,
  Award
} from 'lucide-react'

export function CoursesView() {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [activeLesson, setActiveLesson] = useState(null)
  const [completedLessons, setCompletedLessons] = useState({})

  const iconMap = {
    Terminal: Terminal,
    ScanSearch: ScanSearch,
    ShieldAlert: ShieldAlert,
    GraduationCap: GraduationCap
  }

  const handleToggleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId]
    }))
  }

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--text-main)]/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-naranja-kuska)]/10 text-[var(--color-naranja-kuska)] text-xs font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Academia STEAM & MIL</span>
            </div>
            <h1 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
              Módulos de Inmunidad Cognitiva
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Capacitación estructurada y socrática para transformar a estudiantes, docentes, emprendedores y familias en creadores digitales reflexivos, éticos y resilientes.
            </p>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[var(--text-main)]/10 shadow-sm shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-amarillo-radar)] flex items-center justify-center text-[var(--text-main)] font-logo text-2xl font-bold">
              4
            </div>
            <div>
              <div className="text-xs font-mono font-bold uppercase text-[var(--text-main)]/50">
                Módulos Activos
              </div>
              <div className="text-sm font-bold text-[var(--text-main)]">
                15 Micro-Lecciones
              </div>
            </div>
          </div>
        </div>

        {/* COURSES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {coursesData.map((course) => {
            const Icon = iconMap[course.icon] || BookOpen
            return (
              <div 
                key={course.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* TOP ACCENT LINE */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: course.color }}
                />

                <div className="space-y-5">
                  <div className="flex items-center justify-between gap-2">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: course.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--text-main)]/5 text-[var(--text-main)]/70 rounded-md">
                        {course.tag}
                      </span>
                      <span 
                        className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md text-white"
                        style={{ backgroundColor: course.color }}
                      >
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-logo text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-tight mb-2 group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-main)]/60 pt-2 border-t border-[var(--text-main)]/5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{course.modulesCount} Lecciones</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--text-main)]/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[var(--text-main)]/50">
                    Nivel: {course.level}
                  </span>
                  <button
                    onClick={() => {
                      setSelectedCourse(course)
                      setActiveLesson(course.lessons[0])
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--color-naranja-kuska)] active:scale-95 transition-all shadow-sm"
                  >
                    <span>Explorar Módulo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* COURSE DETAIL MODAL */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-[var(--text-main)]/20">
            
            {/* MODAL HEADER */}
            <div className="p-6 sm:p-8 bg-white border-b border-[var(--text-main)]/10 flex items-start justify-between gap-4">
              <div>
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--text-main)]/5 text-[var(--text-main)]/70 rounded-md">
                  {selectedCourse.tag}
                </span>
                <h2 className="font-logo text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] uppercase mt-2">
                  {selectedCourse.title}
                </h2>
                <p className="text-xs sm:text-sm text-[var(--text-main)]/70 mt-1 max-w-2xl font-sans">
                  {selectedCourse.summary}
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 rounded-xl text-[var(--text-main)]/50 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5 focus:outline-none transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* MODAL CONTENT: LESSONS & ACTIVE VIEWER */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* LESSONS LIST (COL 5) */}
              <div className="lg:col-span-5 space-y-3">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-main)]/50 mb-2">
                  Plan de Lecciones ({selectedCourse.lessons.length})
                </h4>
                {selectedCourse.lessons.map((lesson, idx) => {
                  const isCurrent = activeLesson?.id === lesson.id
                  const isCompleted = completedLessons[lesson.id]
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                        isCurrent
                          ? 'bg-white border-[var(--color-naranja-kuska)] shadow-md'
                          : 'bg-white/60 border-[var(--text-main)]/10 hover:bg-white'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-[var(--text-main)] font-sans">
                          {lesson.title}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--text-main)]/50">
                          <Clock className="w-3 h-3" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToggleLessonComplete(lesson.id)
                        }}
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isCompleted 
                            ? 'bg-[var(--color-naranja-kuska)] text-white' 
                            : 'bg-[var(--text-main)]/5 text-[var(--text-main)]/30 hover:bg-[var(--text-main)]/10'
                        }`}
                        title={isCompleted ? "Completado" : "Marcar como completado"}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* ACTIVE LESSON DETAILS (COL 7) */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[var(--text-main)]/10 flex flex-col justify-between space-y-6">
                {activeLesson ? (
                  <>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-bold text-[var(--color-naranja-kuska)] uppercase">
                          Lección Seleccionada
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--text-main)]/60">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{activeLesson.duration}</span>
                        </div>
                      </div>

                      <h3 className="font-logo text-2xl sm:text-3xl font-bold text-[var(--text-main)] uppercase leading-tight">
                        {activeLesson.title}
                      </h3>

                      <p className="text-sm text-[var(--text-main)]/80 font-sans leading-relaxed">
                        {activeLesson.description}
                      </p>

                      <div className="p-4 rounded-xl bg-[var(--color-amarillo-radar)]/20 border border-[var(--color-amarillo-radar)]/40">
                        <div className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--text-main)] mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--color-naranja-kuska)]" />
                          <span>Principio Clave Socrático</span>
                        </div>
                        <p className="text-xs font-sans text-[var(--text-main)]/90">
                          {activeLesson.keyTakeaway}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[var(--text-main)]/10 flex items-center justify-between gap-4">
                      <button
                        onClick={() => handleToggleLessonComplete(activeLesson.id)}
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                          completedLessons[activeLesson.id]
                            ? 'bg-[var(--color-naranja-kuska)] text-white'
                            : 'bg-[var(--text-main)]/5 text-[var(--text-main)] hover:bg-[var(--text-main)]/10'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{completedLessons[activeLesson.id] ? 'Lección Completada' : 'Marcar como Vista'}</span>
                      </button>

                      <button
                        onClick={() => alert("¡Excelente! Has reforzado tu escudo cognitivo.")}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl hover:bg-[var(--color-naranja-kuska)] transition-all shadow-sm"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Iniciar Ejercicio</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-xs font-mono text-[var(--text-main)]/50">
                    Selecciona una lección para comenzar.
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      )}

    </MainLayout>
  )
}
