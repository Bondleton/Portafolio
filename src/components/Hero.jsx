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

    const skills = ['HTML', 'CSS', 'React', 'Node.js', 'Figma', 'FastAPI', 'PHP', 'MySQL'];

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
            <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Sobre mí
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Apasionada por crear soluciones innovadoras a través del código
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all">
                            <div className="text-blue-400 mb-4"><CodeIcon /></div>
                            <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Frontend</h3>
                            <p className="text-gray-400 text-sm">
                                Creo interfaces de usuario atractivas y responsivas, transformando ideas en sitios web funcionales. 
                                Experta en React, CSS moderno y mejores prácticas de UI/UX.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all">
                            <div className="text-blue-400 mb-4"><ServerIcon /></div>
                            <h3 className="text-xl font-semibold text-white mb-2">Desarrollo Backend</h3>
                            <p className="text-gray-400 text-sm">
                                Construyo APIs escalables y arquitecturas de servidor robustas, asegurando comunicación fluida 
                                entre sistemas con seguridad y rendimiento óptimos.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all">
                            <div className="text-blue-400 mb-4"><PaletteIcon /></div>
                            <h3 className="text-xl font-semibold text-white mb-2">Diseño UI</h3>
                            <p className="text-gray-400 text-sm">
                                Diseño interfaces limpias e intuitivas, creando experiencias visuales que combinan estética 
                                y funcionalidad con atención al detalle.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-800/30 rounded-xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-blue-400"><GraduationIcon /></div>
                            <h3 className="text-2xl font-bold text-white">Formación Académica</h3>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white">Ingeniería en Tecnologías de la Información</h4>
                            <p className="text-blue-400">BUAP - Benemérita Universidad Autónoma de Puebla</p>
                            <p className="text-gray-400">Cursando actualmente</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {focusAreas.map((area, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="text-blue-400"><HeartIcon /></div>
                                    <span className="text-gray-400 text-sm">{area}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Tecnologías
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-xl p-4 text-center hover:bg-slate-800/70 transition-all">
                                <div className="text-2xl mb-2">{skill}</div>
                                <p className="text-gray-400 text-sm">{skill}</p>
                            </div>
                        ))}
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