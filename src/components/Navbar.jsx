import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
    const [menuMovilAbierto, setMenuMovilAbierto] = useState(false)
    const [seccionActiva, setSeccionActiva] = useState('inicio')
    const [scrollActivo, setScrollActivo] = useState(false)

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
        
        return () => window.removeEventListener('scroll', manejarScroll)
    }, [])

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

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrollActivo 
                ? 'bg-slate-950/90 backdrop-blur-md shadow-lg' 
                : 'bg-slate-950/20 backdrop-blur-sm'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    
                    {/* Logo */}
                    <button 
                        onClick={() => irASeccion('inicio')}
                        className="flex items-center space-x-1 group cursor-pointer transition-transform hover:scale-105"
                    >
                        <span className="text-white text-lg sm:text-xl md:text-2xl font-medium">
                            Portafolio <span className="bg-gradient from-blue-400 to-cyan-400 bg-clip-text text-transparent">Itzel</span>
                        </span>
                    </button>

                    {/* Navegación Desktop */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {[
                            { id: 'inicio', label: 'Inicio' },
                            { id: 'sobre-mi', label: 'Sobre mí' },
                            { id: 'experiencia', label: 'Experiencia' },
                            { id: 'proyectos', label: 'Proyectos' },
                            { id: 'contacto', label: 'Contacto' }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => manejarClickNav(e, item.id)}
                                className={`relative text-sm lg:text-base transition-all duration-300 group ${
                                    seccionActiva === item.id 
                                        ? 'text-blue-400' 
                                        : 'text-gray-300 hover:text-white'
                                }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient from-blue-400 to-cyan-400 transition-transform duration-300 ${
                                    seccionActiva === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`}></span>
                            </a>
                        ))}
                    </div>

                    {/* Botón contacto */}
                    <button 
                        onClick={() => irASeccion('contacto')}
                        className="hidden md:block bg-gradient from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2 rounded-lg text-sm transition-all transform hover:scale-105 shadow-lg"
                    >
                        Hablemos
                    </button>

                    {/* Botón menú móvil */}
                    <button
                        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                        onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
                        aria-label="Abrir menú"
                    >
                        {menuMovilAbierto ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                
                {/* Menú móvil */}
                <div 
                    className={`md:hidden transition-all duration-300 overflow-hidden ${
                        menuMovilAbierto ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 rounded-b-2xl">
                        <div className="flex flex-col space-y-3 px-4 py-4 sm:py-6">
                            {[
                                { id: 'inicio', label: 'Inicio' },
                                { id: 'sobre-mi', label: 'Sobre mí' },
                                { id: 'experiencia', label: 'Experiencia' },
                                { id: 'proyectos', label: 'Proyectos' },
                                { id: 'contacto', label: 'Contacto' }
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={(e) => manejarClickNav(e, item.id)}
                                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                                        seccionActiva === item.id
                                            ? 'bg-blue-500/20 text-blue-400 border-l-4 border-blue-400'
                                            : 'text-gray-300 hover:bg-slate-800/50 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            ))}

                            <button
                                onClick={() => {
                                    irASeccion('contacto')
                                    setMenuMovilAbierto(false)
                                }}
                                className="mt-4 bg-gradient from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-3 rounded-lg text-sm transition-all transform hover:scale-105"
                            >
                                Hablemos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}