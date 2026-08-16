import React, { useState } from 'react'
import { MainLayout } from '../../../shared/components/MainLayout'
import { blogData } from '../data/blogData'
import { 
  FileText, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  Share2, 
  Bookmark, 
  X, 
  Search,
  Filter
} from 'lucide-react'

export function BlogView() {
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['Todos', 'Amenazas de IA', 'Casos Reales Perú', 'Pedagogía & Ciencia', 'Neurociencia & UX']

  const filteredArticles = blogData.filter(art => {
    const matchesCat = selectedCategory === 'Todos' || art.category === selectedCategory
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER */}
        <div className="space-y-4 max-w-3xl pb-8 border-b border-[var(--text-main)]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-rojo-alerta)]/10 text-[var(--color-rojo-alerta)] text-xs font-mono font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Bitácora & Divulgación</span>
          </div>
          <h1 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
            Investigaciones & Alertas de Desinformación
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
            Artículos de investigación, análisis forense de casos reales en Perú y guías científicas para combatir la infodemia y proteger a tu comunidad.
          </p>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 pb-6">
          
          {/* CATEGORIES PILLS */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[var(--text-main)] text-white shadow-sm'
                    : 'bg-white border border-[var(--text-main)]/10 text-[var(--text-main)]/70 hover:text-[var(--text-main)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* SEARCH INPUT */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[var(--text-main)]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en la bitácora..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-[var(--text-main)]/10 text-xs text-[var(--text-main)] placeholder:text-[var(--text-main)]/40 focus:outline-none focus:border-[var(--color-naranja-kuska)]"
            />
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1.5"
                style={{ backgroundColor: art.color }}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span 
                    className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md text-white"
                    style={{ backgroundColor: art.color }}
                  >
                    {art.coverTag}
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-main)]/50">
                    {art.category}
                  </span>
                </div>

                <h3 className="font-logo text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-tight group-hover:text-[var(--color-naranja-kuska)] transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-main)]/70 font-sans leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--text-main)]/10 flex items-center justify-between text-xs font-mono text-[var(--text-main)]/60">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[var(--text-main)]/5 flex items-center justify-center group-hover:bg-[var(--color-naranja-kuska)] group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-[var(--text-main)]/20">
            
            {/* READER HEADER */}
            <div className="p-6 sm:p-8 bg-white border-b border-[var(--text-main)]/10 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span 
                    className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md text-white"
                    style={{ backgroundColor: selectedArticle.color }}
                  >
                    {selectedArticle.coverTag}
                  </span>
                  <span className="text-xs font-mono text-[var(--text-main)]/50">
                    {selectedArticle.category}
                  </span>
                </div>
                <h2 className="font-logo text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-tight">
                  {selectedArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-main)]/60 pt-1">
                  <span className="flex items-center gap-1.5 font-bold text-[var(--text-main)]">
                    <User className="w-3.5 h-3.5 text-[var(--color-naranja-kuska)]" />
                    {selectedArticle.author}
                  </span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-xl text-[var(--text-main)]/50 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5 focus:outline-none transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* READER BODY */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white space-y-6">
              <div className="p-4 rounded-2xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 text-sm font-medium text-[var(--text-main)]/80 italic">
                "{selectedArticle.excerpt}"
              </div>

              <div className="prose prose-sm sm:prose max-w-none font-sans text-[var(--text-main)]/90 leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-8 mt-8 border-t border-[var(--text-main)]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-[var(--text-main)]/50">
                  ¿Te resultó útil este análisis? Compártelo en tu comunidad.
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => alert("Enlace copiado al portapapeles.")}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--text-main)]/5 text-[var(--text-main)] text-xs font-mono font-bold uppercase rounded-xl hover:bg-[var(--text-main)]/10 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Compartir</span>
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-5 py-2 bg-[var(--color-naranja-kuska)] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[var(--color-naranja-kuska)]/90 transition-colors"
                  >
                    Cerrar Lectura
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </MainLayout>
  )
}
