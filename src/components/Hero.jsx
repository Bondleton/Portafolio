import { useEffect, useState } from "react"

// Iconos simples sin dependencias externas
const GithubIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
)

const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" stroke="none" fill="currentColor" />
    </svg>
)

const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
)

const ExternalLinkIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
)

const CodeIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
)

const PaletteIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
)

const ServerIcon = () => (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
)

const GraduationIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
)

const HeartIcon = () => (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
)

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Función para scroll suave (debe estar definida antes de usarse)
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const developerData = {
        name: 'Scarlett Itzel Xochicale Flores',
        occupation: 'Ingeniería en Tecnologías de la Información',
        role: 'Desarrolladora Full-Stack',
        location: 'Puebla, México',
        passion: 'Construyendo soluciones web innovadoras'
    };

    const projects = [
        {
            title: 'Ducati Showcase',
            description: 'Aplicación web frontend construida con Angular para explorar arquitectura basada en componentes, enrutamiento y diseño responsivo inspirado en la marca Ducati.',
            tech: ['Angular', 'SCSS'],
            image: '🏍️'
        },
    ];

    const focusAreas = [
        'Desarrollo Web',
        'Soluciones Full-Stack',
        'Diseño UI/UX',
        'Desarrollo de APIs',
        'Diseño de Bases de Datos',
        'Servicios Cloud'
    ];

    return (
        <>
            {/* Home Section */}
            <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Efecto de gradiente que sigue al mouse */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                    }}
                />

                {/* Elementos decorativos de fondo */}
                <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Contenido principal en dos columnas */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-fade-in-left">

                        {/* Columna Izquierda - Información personal */}
                        <div className="text-center lg:text-left">
                            {/* Badge de saludo */}
                            <div className="inline-flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
                                <span className="text-2xl">👋</span>
                                <span className="text-blue-400 text-sm"></span>
                            </div>

                            {/* Título principal */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4">
                                Hola, soy
                                <br />
                                <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-size[length:200%] animate-gradient">
                                    Scarlett Itzel
                                </span>
                            </h1>

                            {/* Rol */}
                            <div className="text-2xl sm:text-3xl text-gray-300 mb-4">
                                Desarrolladora Full-Stack
                            </div>

                            {/* Descripción */}
                            <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                                Desarrollo experiencias digitales modernas con código limpio y diseño innovador.
                                Especializada en tecnologías web actuales y soluciones escalables.
                            </p>

                            {/* Botones de acción */}
                            <div className="flex gap-4 justify-center lg:justify-start mb-8">
                                <button
                                    onClick={() => scrollToSection('contacto')}
                                    className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Contáctame
                                </button>
                                <button
                                    onClick={() => scrollToSection('proyectos')}
                                    className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg transition-all transform hover:scale-105"
                                >
                                    Ver proyectos
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex gap-6 justify-center lg:justify-start">
                                <div>
                                    <div className="text-2xl font-bold text-white">2+</div>
                                    <div className="text-xs text-gray-500">Años de experiencia</div>
                                </div>
                                <div className="w-px h-10 bg-gray-700"></div>
                                <div>
                                    <div className="text-2xl font-bold text-white">15+</div>
                                    <div className="text-xs text-gray-500">Proyectos completados</div>
                                </div>
                                <div className="w-px h-10 bg-gray-700"></div>
                                <div>
                                    <div className="text-2xl font-bold text-white">10+</div>
                                    <div className="text-xs text-gray-500">Clientes satisfechos</div>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha - Código/IDE */}
                        <div className="relative">
                            {/* Efecto de brillo detrás del código */}
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-3xl"></div>

                            {/* Ventana de código estilo IDE */}
                            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">

                                {/* IDE Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-white/10">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 text-blue-400">
                                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <span className="text-xs text-gray-400 font-mono">desarrolladora.js</span>
                                    </div>
                                    <div className="w-12"></div>
                                </div>

                                {/* IDE Content */}
                                <div className="p-6">
                                    <pre className="text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto">
                                        <code className="block space-y-1">
                                            <span className="text-purple-400">const</span> desarrolladora = {"{"}
                                            <br />
                                            <span className="ml-4">
                                                <span className="text-blue-400">nombre</span>: <span className="text-green-400">'{developerData.name}'</span>,
                                            </span>
                                            <br />
                                            <span className="ml-4">
                                                <span className="text-blue-400">formación</span>: <span className="text-green-400">'{developerData.occupation}'</span>,
                                            </span>
                                            <br />
                                            <span className="ml-4">
                                                <span className="text-blue-400">rol</span>: <span className="text-green-400">'{developerData.role}'</span>,
                                            </span>
                                            <br />
                                            <span className="ml-4">
                                                <span className="text-blue-400">ubicación</span>: <span className="text-green-400">'{developerData.location}'</span>,
                                            </span>
                                            <br />
                                            <span className="ml-4">
                                                <span className="text-blue-400">pasión</span>: <span className="text-green-400">'{developerData.passion}'</span>
                                            </span>
                                            <br />
                                            {"}"}
                                            <br />
                                            <br />
                                            <span className="text-purple-400">export</span> <span className="text-purple-400">default</span> desarrolladora;
                                            <div className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-1"></div>
                                        </code>
                                    </pre>
                                </div>

                                {/* IDE Footer */}
                                <div className="px-4 py-2 bg-slate-800/30 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span>Lista para codificar</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>TypeScript</span>
                                        <span>•</span>
                                        <span>React</span>
                                        <span>•</span>
                                        <span>Tailwind</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decoración adicional */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">

                    {/* Título y descripción principal */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Sobre mí
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                            Apasionada por crear soluciones innovadoras que combinan tecnología, diseño y estrategia de negocio
                        </p>
                    </div>

                    {/* Cards de habilidades - 4 columnas en desktop */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">

                        {/* Product Owner Junior */}
                        <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-5 sm:p-6 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all border border-blue-500/20 group">
                            <div className="text-blue-400 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Product Owner Junior</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Visión estratégica del producto, gestión de backlog, priorización ágil y comunicación efectiva con stakeholders.
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Scrum</span>
                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Backlog</span>
                                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Stakeholders</span>
                            </div>
                        </div>

                        {/* Frontend */}
                        <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 hover:bg-slate-800/70 transition-all group">
                            <div className="text-blue-400 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                                <CodeIcon />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Desarrollo Frontend</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Creo interfaces de usuario atractivas, transformando ideas en sitios web funcionales. Experta en frameworks, CSS moderno y mejores prácticas de UI/UX.
                            </p>
                        </div>

                        {/* Backend */}
                        <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 hover:bg-slate-800/70 transition-all group">
                            <div className="text-blue-400 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                                <ServerIcon />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Desarrollo Backend</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Construyo modelos y bases de datos relacionales así como no relacionales.
                            </p>
                        </div>

                        {/* UI Design */}
                        <div className="bg-slate-800/50 rounded-xl p-5 sm:p-6 hover:bg-slate-800/70 transition-all group">
                            <div className="text-blue-400 mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">
                                <PaletteIcon />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Diseño UI/UX</h3>
                            <p className="text-gray-400 text-xs sm:text-sm">
                                Diseño experiencias enfocadas en la usabilidad, funcionalidad y accesibilidad.
                            </p>
                        </div>


                    </div>

                    {/* Descripción profesional extendida */}
                    <div className="bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-xl p-6 sm:p-8 mb-12 sm:mb-16 border border-white/5">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            {/* Avatar o ícono */}
                            <div className="shrink-0">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                    <span className="text-3xl sm:text-4xl">👩‍💻</span>
                                </div>
                            </div>

                            {/* Descripción */}
                            <div className="flex-1">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                                    Scarlett Itzel Xochicale Flores
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                    Soy una desarrolladora full-stack en formación con una fuerte pasión por la gestión de productos tecnológicos.
                                    Actualmente curso la licenciatura en Ingeniería en Tecnologías de la Información en la BUAP, donde he desarrollado habilidades técnicas
                                    y estratégicas para construir soluciones que realmente aporten valor a los usuarios y al negocio.
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Mi objetivo es crecer como <span className="text-blue-400 font-semibold">Product Owner Junior</span>,
                                    combinando mi experiencia técnica con visión estratégica para liderar equipos ágiles,
                                    priorizar funcionalidades basadas en valor y asegurar que cada producto entregue resultados excepcionales.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Formación Académica y Áreas de Enfoque */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

                        {/* Formación Académica */}
                        <div className="bg-slate-800/30 rounded-xl p-6 sm:p-8 hover:bg-slate-800/40 transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-blue-400"><GraduationIcon /></div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Formación Académica</h3>
                            </div>
                            <div className="mb-6">
                                <h4 className="text-lg sm:text-xl font-semibold text-white">Ingeniería en Tecnologías de la Información</h4>
                                <p className="text-blue-400 text-sm sm:text-base">BUAP - Benemérita Universidad Autónoma de Puebla</p>
                                <p className="text-gray-400 text-sm">2021 - Presente | Cursando actualmente</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span className="text-gray-300 text-sm">Promedio destacado en materias de desarrollo y gestión</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span className="text-gray-300 text-sm">Participación en proyectos colaborativos con metodologías ágiles</span>
                                </div>
                            </div>
                        </div>

                        {/* Áreas de Enfoque */}
                        <div className="bg-slate-800/30 rounded-xl p-6 sm:p-8 hover:bg-slate-800/40 transition-all">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="text-blue-400">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">Áreas de Enfoque</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { name: 'Gestión de Productos', icon: '📊' },
                                    { name: 'Metodologías Ágiles', icon: '🔄' },
                                    { name: 'Análisis de Requerimientos', icon: '📋' },
                                    { name: 'UX Research', icon: '🔍' },
                                    { name: 'Scrum & Kanban', icon: '📈' },
                                    { name: 'Comunicación Efectiva', icon: '💬' },
                                    { name: 'Liderazgo de Equipos', icon: '👥' },
                                    { name: 'Visión Estratégica', icon: '🎯' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-2 p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all">
                                        <span className="text-lg">{item.icon}</span>
                                        <span className="text-gray-300 text-xs sm:text-sm">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certificaciones y Cursos - Opcional */}
                    {/* <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {[
                            { name: 'Scrum Fundamentals', issuer: 'Scrum Study' },
                            { name: 'Product Management', issuer: 'Google' },
                            { name: 'Agile Development', issuer: 'IBM' },
                            { name: 'UI/UX Design', issuer: 'Meta' }
                        ].map((cert, idx) => (
                            <div key={idx} className="bg-slate-800/20 rounded-lg p-3 text-center hover:bg-slate-800/40 transition-all">
                                <div className="text-blue-400 text-lg mb-1">📜</div>
                                <p className="text-white text-xs sm:text-sm font-medium">{cert.name}</p>
                                <p className="text-gray-500 text-[10px] sm:text-xs">{cert.issuer}</p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>

            {/* Experience Section - Tecnologías */}
            <section id="experiencia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">

                    {/* Título y descripción */}
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Tecnologías & Herramientas
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                            Stack tecnológico que utilizo para construir soluciones robustas y escalables
                        </p>
                    </div>

                    {/* Lenguajes de Programación */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1 h-6 sm:h-8 bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Lenguajes de Programación</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                            {[
                                { name: 'Java', icon: '☕', level: 'Intermedio' },
                                { name: 'Python', icon: '🐍', level: 'Intermedio' },
                                { name: 'JavaScript', icon: '🟡', level: 'Avanzado' },
                                { name: 'TypeScript', icon: '🔷', level: 'Intermedio' },
                                { name: 'PHP', icon: '🐘', level: 'Intermedio' }
                            ].map((tech, idx) => (
                                <div key={idx} className="group bg-slate-800/50 rounded-xl p-3 sm:p-4 text-center hover:bg-slate-800/70 transition-all hover:scale-105 transform duration-300">
                                    <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
                                    <p className="text-white font-semibold text-sm sm:text-base">{tech.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">{tech.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frontend & Desarrollo Web */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1 h-6 sm:h-8 bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Frontend & Desarrollo Web</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                            {[
                                { name: 'HTML5', icon: '🌐', level: 'Avanzado' },
                                { name: 'CSS3', icon: '🎨', level: 'Avanzado' },
                                { name: 'Tailwind', icon: '💨', level: 'Básico' },
                                { name: 'Bootstrap', icon: '🚀', level: 'Intermedio' },
                                { name: 'React', icon: '⚛️', level: 'Avanzado' },
                                { name: 'Angular', icon: '🅰️', level: 'Intermedio' },
                                { name: 'Ionic', icon: '📱', level: 'Intermedio' }
                            ].map((tech, idx) => (
                                <div key={idx} className="group bg-slate-800/50 rounded-xl p-3 sm:p-4 text-center hover:bg-slate-800/70 transition-all hover:scale-105 transform duration-300">
                                    <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
                                    <p className="text-white font-semibold text-sm sm:text-base">{tech.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">{tech.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Bases de Datos */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1 h-6 sm:h-8 bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Backend & Bases de Datos</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {[
                                { name: 'Node.js', icon: '🟢', level: 'Intermedio' },
                                { name: 'Django', icon: '🎯', level: 'Intermedio' },
                                { name: 'Laravel', icon: '🔴', level: 'Intermedio', highlight: true },
                                { name: 'FastAPI', icon: '⚡', level: 'Intermedio' },
                                { name: 'MySQL', icon: '🐬', level: 'Avanzado' },
                                { name: 'MySQL Workbench', icon: '🔧', level: 'Avanzado', highlight: true },
                                { name: 'Firebase', icon: '🔥', level: 'Intermedio' },
                                { name: 'SQL', icon: '📊', level: 'Avanzado' }
                            ].map((tech, idx) => (
                                <div key={idx} className={`group bg-slate-800/50 rounded-xl p-3 sm:p-4 text-center hover:bg-slate-800/70 transition-all hover:scale-105 transform duration-300 ${tech.highlight ? 'border border-blue-500/30' : ''}`}>
                                    <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
                                    <p className="text-white font-semibold text-sm sm:text-base">{tech.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">{tech.level}</p>
                                    {tech.highlight && (
                                        <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">Prácticas</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Herramientas & Frameworks */}
                    <div className="mb-12 sm:mb-16">
                        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                            <div className="w-1 h-6 sm:h-8 bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Herramientas & Frameworks</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                            {[
                                { name: 'Git', icon: '📦', level: 'Avanzado' },
                                { name: 'GitHub', icon: '🐙', level: 'Avanzado' },
                                { name: 'Figma', icon: '🎨', level: 'Intermedio' },
                                { name: 'VSCode', icon: '💻', level: 'Avanzado' },
                                { name: 'Microsoft 365', icon: '📁', level: 'Avanzado' },
                                { name: 'VMware', icon: '🖥️', level: 'Intermedio' }
                            ].map((tech, idx) => (
                                <div key={idx} className="group bg-slate-800/50 rounded-xl p-3 sm:p-4 text-center hover:bg-slate-800/70 transition-all hover:scale-105 transform duration-300">
                                    <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
                                    <p className="text-white font-semibold text-sm sm:text-base">{tech.name}</p>
                                    <p className="text-gray-500 text-xs mt-1">{tech.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metodologías & Especializaciones */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Metodologías */}
                        <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <span className="text-2xl">🔄</span>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Metodologías Ágiles</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Scrum', 'XP', 'Cascada', 'PMBOK', 'Design Thinking'].map((method, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-blue-500/10 text-blue-300 rounded-lg text-xs sm:text-sm hover:bg-blue-500/20 transition-all">
                                        {method}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Sistemas Operativos */}
                        <div className="bg-slate-800/30 rounded-xl p-5 sm:p-6">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <span className="text-2xl">💿</span>
                                <h3 className="text-lg sm:text-xl font-bold text-white">Sistemas Operativos</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {['Windows', 'Linux (Ubuntu)', 'Linux (Fedora)', 'Linux (Debian)', 'macOS'].map((os, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-cyan-500/10 text-cyan-300 rounded-lg text-xs sm:text-sm hover:bg-cyan-500/20 transition-all">
                                        {os}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Áreas de Especialización */}
                    <div className="mt-8 sm:mt-12 bg-linear-to-r from-blue-500/5 to-cyan-500/5 rounded-xl p-5 sm:p-6 border border-white/5">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                            <span className="text-2xl">⭐</span>
                            <h3 className="text-lg sm:text-xl font-bold text-white">Áreas de Especialización</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                            {[
                                'UI/UX Design', 'Ingeniería Web', 'Desarrollo Web', 'Desarrollo Móvil',
                                'Control de Calidad', 'Análisis de Datos', 'Desarrollo basado en modelos',
                                'Integración de microservicios', 'DevOps', 'IoT'
                            ].map((area, idx) => (
                                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 p-2 rounded-lg hover:bg-slate-800/50 transition-all">
                                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    <span className="text-gray-300 text-xs sm:text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Prácticas Profesionales */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 sm:p-8 md:p-10 border border-blue-500/20">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                            {/* Logo/Icono */}
                            <div className="shrink-0">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                                    <span className="text-4xl sm:text-5xl">📺</span>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-xs sm:text-sm mb-3">
                                    Prácticas Profesionales | Actualmente
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    ImagenTelevisión - Puebla
                                </h3>
                                <p className="text-gray-300 text-sm sm:text-base mb-3">
                                    Desarrolladora Full-Stack en formación práctica
                                </p>
                                <p className="text-gray-400 text-xs sm:text-sm mb-4">
                                    Desarrollo y mantenimiento de sistemas internos utilizando <span className="text-blue-400 font-semibold">Laravel</span> y
                                    <span className="text-blue-400 font-semibold"> MySQL Workbench</span>. Participación en el ciclo de vida del desarrollo
                                    de software, desde la planificación hasta la implementación.
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                    <span className="px-2.5 py-1 bg-slate-800/50 text-blue-300 rounded-lg text-xs">Laravel</span>
                                    <span className="px-2.5 py-1 bg-slate-800/50 text-blue-300 rounded-lg text-xs">MySQL Workbench</span>
                                    <span className="px-2.5 py-1 bg-slate-800/50 text-blue-300 rounded-lg text-xs">PHP</span>
                                    <span className="px-2.5 py-1 bg-slate-800/50 text-blue-300 rounded-lg text-xs">Metodologías Ágiles</span>
                                </div>
                            </div>

                            {/* Fecha */}
                            <div className="shrink-0">
                                <div className="text-center">
                                    <div className="text-blue-400 font-bold text-lg">2026 - Presente</div>
                                    <div className="text-gray-500 text-xs">Puebla, México</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Projects Section */}
            <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Proyectos Destacados
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all">
                                <div className="h-48 bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-6xl">
                                    {project.image}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIdx) => (
                                            <span key={techIdx} className="text-xs bg-slate-900/50 px-2 py-1 rounded text-blue-400">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 text-sm">
                                        Ver proyecto <span><ExternalLinkIcon /></span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Contacto
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                        ¿Tienes un proyecto en mente? ¡Me encantaría escucharte!
                        Estoy disponible para nuevas oportunidades y colaboraciones.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="text-blue-400"><MailIcon /></div>
                            <a href="mailto:scarlett.xochicalef@alumno.buap.mx" className="text-gray-300 hover:text-blue-400 transition-colors">
                                scarlett.xochicalef@alumno.buap.mx
                            </a>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="text-blue-400"><GithubIcon /></div>
                            <a href="https://github.com/bondleton" className="text-gray-300 hover:text-blue-400 transition-colors">
                                github.com/bondleton
                            </a>
                        </div>
                        <div className="flex items-center gap-3 justify-center">
                            <div className="text-blue-400"><LinkedinIcon /></div>
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                linkedin.com/in/scarlettitzel
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8">
                        <p className="text-gray-500 text-sm">© 2026 Scarlett Itzel Xochicale Flores. Todos los derechos reservados.</p>
                    </div>
                </div>
            </section>
        </>
    )
}