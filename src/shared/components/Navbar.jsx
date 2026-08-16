import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Sparkles, 
  Layers, 
  Bot, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Menu, 
  X, 
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  Users
} from 'lucide-react'

export function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState({})
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const toggleDropdown = (name) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [name]: !prev[name]
    }))
  }

  const navLinks = [
    {
      name: 'Estación Central',
      path: '/',
      icon: Layers,
      highlight: false
    },
    {
      name: 'Kuzka Lab',
      icon: Sparkles,
      dropdown: [
        {
          name: 'Kuska Check',
          badge: 'Fase 1',
          path: '/check',
          icon: Sparkles
        },
        {
          name: 'Kuska Kit',
          badge: 'Fase 2',
          path: '/kit',
          icon: Layers
        },
        {
          name: 'Kuzk! Pet',
          badge: 'Fase 3',
          path: '/pet',
          icon: Bot
        }
      ]
    },
    {
      name: 'Kuzka Hub',
      path: '/cursos',
      icon: BookOpen,
      highlight: false
    },
    {
      name: 'Comunidad',
      icon: Users,
      dropdown: [
        {
          name: 'Blog',
          path: '/blog',
          icon: FileText
        },
        {
          name: 'Foro',
          path: '/foro',
          icon: MessageSquare
        },
        {
          name: 'Sobre Nosotros',
          path: '/about',
          icon: Users
        }
      ]
    }
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    if (path === '/check' && location.pathname === '/test') return true
    return false
  }

  const isDropdownActive = (dropdown) => {
    return dropdown.some(item => isActive(item.path))
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[var(--text-main)]/10 py-2.5' 
          : 'bg-[#FBF9F5] border-b border-[var(--text-main)]/5 py-3.5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <Link 
          to="/" 
          className="flex items-center group focus:outline-none"
        >
          <img 
            src="/LOGOTIPO PRINCIPAL.png" 
            alt="Kuzka Lab UNESCO" 
            className="h-10 lg:h-12 object-contain group-hover:scale-[1.02] transition-transform"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden xl:flex items-center gap-2">
          {navLinks.map((item) => {
            if (item.dropdown) {
              const activeGroup = isDropdownActive(item.dropdown)
              return (
                <div key={item.name} className="relative group px-1">
                  <button className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                    activeGroup 
                      ? 'text-[var(--text-main)] bg-[var(--text-main)]/5 font-bold' 
                      : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/3'
                  }`}>
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-56">
                    <div className="bg-white border border-[var(--text-main)]/10 rounded-xl shadow-xl p-2 flex flex-col gap-1">
                      {item.dropdown.map((subItem) => {
                        const active = isActive(subItem.path)
                        const Icon = subItem.icon
                        return (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                              active
                                ? 'bg-[var(--color-naranja-kuska)]/10 text-[var(--text-main)] font-bold'
                                : 'text-[var(--text-main)]/80 hover:bg-[var(--text-main)]/5 hover:text-[var(--text-main)]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <Icon className={`w-4 h-4 ${active ? 'text-[var(--color-naranja-kuska)]' : 'text-[var(--text-main)]/50'}`} />
                              <span className="text-xs">{subItem.name}</span>
                            </div>
                            {subItem.badge && (
                              <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                                active 
                                  ? 'bg-[var(--color-naranja-kuska)] text-white' 
                                  : 'bg-[var(--text-main)]/10 text-[var(--text-main)]/60'
                              }`}>
                                {subItem.badge}
                              </span>
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            }

            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
                  active
                    ? 'text-[var(--text-main)] bg-[var(--text-main)]/5 font-bold shadow-2xs'
                    : 'text-[var(--text-main)]/70 hover:text-[var(--text-main)] hover:bg-[var(--text-main)]/3'
                }`}
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full ${
                    active 
                      ? 'bg-[var(--text-main)] text-white' 
                      : 'bg-[var(--text-main)]/10 text-[var(--text-main)]/70'
                  }`}>
                    {item.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[var(--color-naranja-kuska)] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* RIGHT CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-3">
          <Link
            to="/check"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-naranja-kuska)] text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full hover:bg-[var(--color-naranja-kuska)]/90 active:scale-95 transition-all shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Test de Instinto</span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[var(--text-main)] hover:bg-[var(--text-main)]/5 focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FBF9F5] border-b border-[var(--text-main)]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              if (item.dropdown) {
                const isOpen = openDropdowns[item.name] || false;
                const GroupIcon = item.icon;
                return (
                  <div key={item.name} className="flex flex-col gap-1">
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--text-main)] hover:bg-[var(--text-main)]/5 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <GroupIcon className="w-4 h-4 text-[var(--color-naranja-kuska)]" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isOpen && (
                      <div className="flex flex-col gap-1 pl-4 border-l-2 border-[var(--text-main)]/10 ml-5 my-1">
                        {item.dropdown.map(subItem => {
                          const active = isActive(subItem.path)
                          const Icon = subItem.icon
                          return (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                active
                                  ? 'bg-[var(--color-naranja-kuska)]/10 text-[var(--text-main)] font-bold'
                                  : 'text-[var(--text-main)]/80 hover:bg-[var(--text-main)]/5'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Icon className={`w-4 h-4 ${active ? 'text-[var(--color-naranja-kuska)]' : 'text-[var(--text-main)]/50'}`} />
                                <span>{subItem.name}</span>
                              </div>
                              {subItem.badge && (
                                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                                  active ? 'bg-[var(--color-naranja-kuska)] text-white' : 'bg-[var(--text-main)]/10 text-[var(--text-main)]/60'
                                }`}>
                                  {subItem.badge}
                                </span>
                              )}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              const active = isActive(item.path)
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-[var(--text-main)]/10 text-[var(--text-main)] font-bold'
                      : 'text-[var(--text-main)] hover:bg-[var(--text-main)]/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? 'text-[var(--text-main)]' : 'text-[var(--text-main)]/60'}`} />
                    <span>{item.name}</span>
                  </div>
                </Link>
              )
            })}

            <div className="pt-3 mt-2 border-t border-[var(--text-main)]/10">
              <Link
                to="/check"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--text-main)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[var(--color-amarillo-radar)]" />
                <span>Iniciar Evaluación Rápida</span>
                <ChevronRight className="w-4 h-4 ml-1 opacity-70" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
