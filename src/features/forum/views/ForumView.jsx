import React, { useState } from 'react'
import { MainLayout } from '../../../shared/components/MainLayout'
import { initialForumPosts } from '../data/forumData'
import { 
  MessageSquare, 
  ThumbsUp, 
  MessageCircle, 
  PlusCircle, 
  Send, 
  ShieldAlert, 
  User, 
  Tag, 
  Search,
  Filter,
  Sparkles,
  Award,
  ChevronDown
} from 'lucide-react'

export function ForumView() {
  const [posts, setPosts] = useState(initialForumPosts)
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedPostId, setExpandedPostId] = useState(null)
  
  // New Post Form State
  const [showNewPostModal, setShowNewPostModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newRole, setNewRole] = useState('Estudiante')
  const [newCategory, setNewCategory] = useState('Alerta Ciudadana')

  // Reply Input State
  const [replyInputs, setReplyInputs] = useState({})

  const categories = ['Todos', 'Alerta Ciudadana', 'Dilemas Éticos', 'Casos de Negocio', 'Aula & DPCC']

  const handleVote = (postId) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return { ...p, votes: p.votes + 1 }
      }
      return p
    }))
  }

  const handleAddReply = (postId) => {
    const text = replyInputs[postId]
    if (!text || !text.trim()) return

    const newReply = {
      id: `r-${Date.now()}`,
      author: 'Tú (Participante Cívico)',
      role: 'Inmunidad Activa',
      date: 'Justo ahora',
      text: text.trim()
    }

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          repliesCount: p.repliesCount + 1,
          replies: [...p.replies, newReply]
        }
      }
      return p
    }))

    setReplyInputs(prev => ({ ...prev, [postId]: '' }))
  }

  const handleCreatePost = (e) => {
    e.preventDefault()
    if (!newTitle.trim() || !newContent.trim() || !newAuthor.trim()) {
      alert("Por favor completa todos los campos del reporte.")
      return
    }

    const newPost = {
      id: `post-${Date.now()}`,
      author: newAuthor.trim(),
      role: newRole,
      badgeColor: '#DE711E',
      category: newCategory,
      title: newTitle.trim(),
      content: newContent.trim(),
      votes: 1,
      repliesCount: 0,
      date: 'Justo ahora',
      tags: [newCategory, 'Comunidad Lima'],
      replies: []
    }

    setPosts([newPost, ...posts])
    setShowNewPostModal(false)
    setNewTitle('')
    setNewContent('')
    setNewAuthor('')
  }

  const filteredPosts = posts.filter(post => {
    const matchesCat = selectedCategory === 'Todos' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <MainLayout>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* HEADER & NEW POST CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--text-main)]/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-azul-tech)]/10 text-[var(--color-azul-tech)] text-xs font-mono font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Foro & Sabiduría Colectiva</span>
            </div>
            <h1 className="font-logo text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-none">
              Comunidad de Inmunidad Cívica
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-main)]/70 font-sans leading-relaxed">
              Comparte alertas de estafas detectadas en tiempo real, consulta dilemas de convivencia digital con IA y co-crea resiliencia intergeneracional.
            </p>
          </div>

          <button
            onClick={() => setShowNewPostModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--color-naranja-kuska)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-2xl hover:bg-[var(--color-naranja-kuska)]/90 active:scale-95 transition-all shadow-md shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Publicar Alerta o Experiencia</span>
          </button>
        </div>

        {/* FILTERS & SEARCH */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 pb-6">
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

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[var(--text-main)]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar en el foro o por autor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white rounded-full border border-[var(--text-main)]/10 text-xs text-[var(--text-main)] placeholder:text-[var(--text-main)]/40 focus:outline-none focus:border-[var(--color-naranja-kuska)]"
            />
          </div>
        </div>

        {/* POSTS LIST */}
        <div className="space-y-6 pt-2">
          {filteredPosts.map((post) => {
            const isExpanded = expandedPostId === post.id
            return (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[var(--text-main)]/10 shadow-sm hover:shadow-md transition-all space-y-5"
              >
                {/* POST TOP BAR */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--text-main)]/5 border border-[var(--text-main)]/10 flex items-center justify-center font-bold text-[var(--text-main)] font-mono text-xs">
                      {post.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[var(--text-main)] font-sans">
                          {post.author}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--text-main)]/5 text-[var(--text-main)]/70">
                          {post.role}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[var(--text-main)]/50">
                        {post.date}
                      </span>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-md bg-[var(--color-amarillo-radar)]/20 text-[var(--text-main)] border border-[var(--color-amarillo-radar)]/40">
                    {post.category}
                  </span>
                </div>

                {/* POST CONTENT */}
                <div className="space-y-2">
                  <h3 className="font-logo text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)] uppercase leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-main)]/80 font-sans leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* TAGS */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-[var(--text-main)]/60 bg-[var(--bg-crema)] px-2 py-0.5 rounded border border-[var(--text-main)]/5">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                {/* POST FOOTER: VOTES & REPLIES TOGGLE */}
                <div className="pt-4 border-t border-[var(--text-main)]/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleVote(post.id)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--bg-crema)] border border-[var(--text-main)]/10 text-xs font-mono font-bold text-[var(--text-main)] hover:bg-[var(--color-naranja-kuska)] hover:text-white hover:border-[var(--color-naranja-kuska)] transition-all"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Inmunidad +{post.votes}</span>
                    </button>

                    <button
                      onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-[var(--text-main)]/70 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>{post.repliesCount} Aportes</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* EXPANDED REPLIES SECTION */}
                {isExpanded && (
                  <div className="pt-4 border-t border-[var(--text-main)]/10 space-y-4 animate-in fade-in duration-200">
                    <div className="space-y-3">
                      {post.replies.map(reply => (
                        <div key={reply.id} className="p-4 rounded-2xl bg-[var(--bg-crema)] border border-[var(--text-main)]/5 space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[var(--text-main)]">{reply.author}</span>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[var(--text-main)]/10 text-[var(--text-main)]/70">{reply.role}</span>
                            </div>
                            <span className="text-[10px] font-mono text-[var(--text-main)]/50">{reply.date}</span>
                          </div>
                          <p className="text-xs text-[var(--text-main)]/80 font-sans leading-relaxed">
                            {reply.text}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* REPLY INPUT */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Escribe una respuesta comunitaria..."
                        value={replyInputs[post.id] || ''}
                        onChange={(e) => setReplyInputs({ ...replyInputs, [post.id]: e.target.value })}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleAddReply(post.id) }}
                        className="flex-1 px-4 py-2.5 bg-[var(--bg-crema)] rounded-xl border border-[var(--text-main)]/10 text-xs text-[var(--text-main)] placeholder:text-[var(--text-main)]/40 focus:outline-none focus:border-[var(--color-naranja-kuska)]"
                      />
                      <button
                        onClick={() => handleAddReply(post.id)}
                        className="px-4 py-2.5 bg-[var(--text-main)] text-white text-xs font-mono font-bold rounded-xl hover:bg-[var(--color-naranja-kuska)] transition-all"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            )
          })}
        </div>

      </div>

      {/* NEW POST MODAL */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#FBF9F5] rounded-3xl w-full max-w-xl shadow-2xl flex flex-col border border-[var(--text-main)]/20 overflow-hidden">
            
            <div className="p-6 bg-white border-b border-[var(--text-main)]/10 flex items-center justify-between">
              <div>
                <h3 className="font-logo text-2xl font-bold uppercase text-[var(--text-main)]">
                  Publicar Alerta o Experiencia
                </h3>
                <p className="text-xs text-[var(--text-main)]/60 font-sans">
                  Tu reporte ayudará a fortalecer las defensas de toda la comunidad.
                </p>
              </div>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="p-1.5 rounded-lg text-[var(--text-main)]/50 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/5"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[var(--text-main)]/70 mb-1">
                  Tu Nombre o Alias
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Mateo (San Marcos) o Vecina Rosa"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[var(--text-main)]/10 text-xs focus:outline-none focus:border-[var(--color-naranja-kuska)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[var(--text-main)]/70 mb-1">
                    Rol
                  </label>
                  <select
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-[var(--text-main)]/10 text-xs focus:outline-none focus:border-[var(--color-naranja-kuska)] font-sans"
                  >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Docente">Docente</option>
                    <option value="Emprendedor">Emprendedor</option>
                    <option value="Líder Vecinal">Líder Vecinal</option>
                    <option value="Facilitador Universitario">Facilitador Univ.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[var(--text-main)]/70 mb-1">
                    Categoría
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white rounded-xl border border-[var(--text-main)]/10 text-xs focus:outline-none focus:border-[var(--color-naranja-kuska)] font-sans"
                  >
                    <option value="Alerta Ciudadana">Alerta Ciudadana</option>
                    <option value="Dilemas Éticos">Dilemas Éticos</option>
                    <option value="Casos de Negocio">Casos de Negocio</option>
                    <option value="Aula & DPCC">Aula & DPCC</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[var(--text-main)]/70 mb-1">
                  Título de la Alerta o Caso
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Nuevo audio falso suplantando al banco en WhatsApp"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[var(--text-main)]/10 text-xs focus:outline-none focus:border-[var(--color-naranja-kuska)]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[var(--text-main)]/70 mb-1">
                  Descripción Detallada & Aprendizaje
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe qué ocurrió, qué señales de alarma notaste y cómo aplicaste la pausa socrática..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white rounded-xl border border-[var(--text-main)]/10 text-xs focus:outline-none focus:border-[var(--color-naranja-kuska)]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-[var(--text-main)]/70 hover:bg-[var(--text-main)]/5"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[var(--color-naranja-kuska)] text-white text-xs font-mono font-bold uppercase rounded-xl hover:bg-[var(--color-naranja-kuska)]/90 shadow-sm"
                >
                  Publicar en el Foro
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </MainLayout>
  )
}
