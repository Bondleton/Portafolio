import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false)
    const [seccionActiva, setSeccionActiva] = useState('inicio')
    const [scrollActivo, setScrollActivo] = useState(false)
    const [hoverAnimacion, setHoverAnimacion] = useState(null)

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const manejarScroll = () => {
            setScrollActivo(window.scrollY > 50)

            // Detectar qué sección está visible
            const secciones = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'contacto']
            const posicionScroll = window.scrollY + 100

            for (const seccion of secciones) {
                const elemento = document.getElementById(seccion)
                if (elemento) {
                    const { offsetTop, offsetHeight } = elemento
                    if (posicionScroll >= offsetTop && posicionScroll < offsetTop + offsetHeight) {
                        setSeccionActiva(seccion)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', manejarScroll)
        manejarScroll()

        // Prevenir scroll cuando el menú móvil está abierto
        if (menuMovilAbierto) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            window.removeEventListener('scroll', manejarScroll)
            document.body.style.overflow = 'unset'
        }
    }, [menuMovilAbierto])

    // Función para scroll suave
    const irASeccion = (idSeccion) => {
        const elemento = document.getElementById(idSeccion)
        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
            setMenuMovilAbierto(false)
        }
    }

    // Manejar clic en enlaces
    const manejarClickNav = (e, idSeccion) => {
        e.preventDefault()
        irASeccion(idSeccion)
    }

    // Elementos de navegación
    const navItems = [
        { id: 'inicio', label: 'Inicio', icon: '🏠' },
        { id: 'sobre-mi', label: 'Sobre mí', icon: '👩‍💻' },
        { id: 'experiencia', label: 'Experiencia', icon: '⚡' },
        { id: 'proyectos', label: 'Proyectos', icon: '🚀' },
        { id: 'contacto', label: 'Contacto', icon: '📥' }
    ]

    return (
        <>
            {/* Overlay para menú móvil */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-500 md:hidden ${menuMovilAbierto ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setMenuMovilAbierto(false)}
            />

            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollActivo
                    ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl border-b border-white/10'
                    : 'bg-slate-950/20 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                        {/* Logo con animación mejorada */}
                        <button
                            onClick={() => irASeccion('inicio')}
                            className="relative flex items-center space-x-1 group cursor-pointer overflow-hidden"
                        >
                            <span className="text-white text-lg sm:text-xl md:text-2xl font-medium transition-all duration-300">
                                Portafolio
                            </span>
                        </button>

                        {/* Navegación Desktop con animaciones avanzadas */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-13">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => manejarClickNav(e, item.id)}
                                    onMouseEnter={() => setHoverAnimacion(item.id)}
                                    onMouseLeave={() => setHoverAnimacion(null)}
                                    className={`relative text-sm lg:text-base transition-all duration-300 group ${seccionActiva === item.id
                                            ? 'text-blue-400'
                                            : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {/* Icono animado */}
                                    <span className={`absolute -left-6 opacity-0 transition-all duration-300 ${hoverAnimacion === item.id ? 'opacity-100 -left-5' : ''
                                        }`}>
                                        {item.icon}
                                    </span>

                                    {item.label}

                                    {/* Línea inferior animada con gradiente */}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${seccionActiva === item.id
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                        }`}></span>

                                    {/* Efecto de brillo al hover */}
                                    {/* <span className={`absolute inset-0 bg-linear-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-lg transition-all duration-700 ${hoverAnimacion === item.id ? 'translate-x-full' : '-translate-x-full'
                                        }`}></span> */}
                                </a>
                            ))}
                        </div>

                        {/* Botón contacto con animación */}
                        <button
                            onClick={() => irASeccion('contacto')}
                            className="hidden md:block relative overflow-hidden bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2 rounded-lg text-sm transition-all transform hover:scale-105 shadow-lg group"
                        >
                            <span className="relative z-10">Hablemos</span>
                            {/* Efecto de onda al hover */}
                            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            {/* Efecto de brillo */}
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                        </button>

                        {/* Botón menú móvil con animación */}
                        <button
                            className="md:hidden relative p-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                            onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
                            aria-label="Abrir menú"
                        >
                            <div className="relative w-6 h-6">
                                <div className={`absolute inset-0 transition-all duration-300 ${menuMovilAbierto ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                                    }`}>
                                    <Menu size={24} />
                                </div>
                                <div className={`absolute inset-0 transition-all duration-300 ${menuMovilAbierto ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                                    }`}>
                                    <X size={24} />
                                </div>
                            </div>

                            {/* Efecto de pulsación */}
                            <span className="absolute inset-0 bg-white/10 rounded-full scale-0 transition-transform duration-300 group-active:scale-100"></span>
                        </button>
                    </div>

                    {/* Menú móvil mejorado con animaciones */}
                    <div
                        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuMovilAbierto ? 'max-h-500px opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 rounded-b-2xl shadow-2xl transform transition-all duration-500">
                            <div className="flex flex-col space-y-2 px-4 py-6">
                                {navItems.map((item, index) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => manejarClickNav(e, item.id)}
                                        className={`group relative block px-4 py-4 rounded-xl transition-all duration-300 transform ${seccionActiva === item.id
                                                ? 'bg-linear-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border-l-4 border-blue-400 scale-[1.02]'
                                                : 'text-gray-300 hover:bg-slate-800/50 hover:text-white hover:scale-[1.02] hover:translate-x-2'
                                            }`}
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            animation: menuMovilAbierto ? 'slideInFromLeft 0.5s ease-out forwards' : 'none'
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl transition-all duration-300 group-hover:scale-110">
                                                {item.icon}
                                            </span>
                                            <span className="font-medium">{item.label}</span>
                                        </div>

                                        {/* Efecto de brillo en móvil */}
                                        <span className={`absolute inset-0 bg-linear-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 rounded-xl transition-all duration-500 ${seccionActiva === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                            }`}></span>
                                    </a>
                                ))}

                                {/* Botón contacto en móvil con animación */}
                                <button
                                    onClick={() => {
                                        irASeccion('contacto')
                                        setMenuMovilAbierto(false)
                                    }}
                                    className="mt-4 relative overflow-hidden bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-4 rounded-xl text-sm transition-all transform hover:scale-105 shadow-lg group"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        📧 Hablemos
                                    </span>
                                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </button>
                            </div>

                            {/* Decoración inferior del menú móvil */}
                            <div className="h-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 animate-gradient"></div>
                        </div>
                    </div>
                </div>

                {/* Barra de progreso de scroll */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10 overflow-hidden">
                    <div
                        className="h-full bg-linear-to-r from-blue-400 to-cyan-400 transition-all duration-300"
                        style={{
                            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
                        }}
                    />
                </div>
            </nav>
        </>
    )
}