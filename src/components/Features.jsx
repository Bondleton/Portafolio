import { useEffect, useState } from "react"

export default function Hero() {
    
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-6 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            
            {/* Contenido principal - Ventana de código estilo IDE */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <div className=" from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                    
                    {/* IDE Header */}
                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-xs text-gray-400 font-mono">developer.ts</div>
                        <div className="w-12"></div> {/* Espaciador */}
                    </div>
                    
                    {/* IDE Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                        <pre className="text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto">
                            <code>{`const developer = {
  name: 'Scarlett Itzel',
  role: 'Full-Stack Developer',
  location: 'Mexico',
  skills: ['React', 'Node.js', 'Tailwind', 'TypeScript'],
  passion: 'Building amazing web experiences',
  status: 'Available for work'
}

// Let's create something amazing together!
console.log('Welcome to my portfolio 🚀');`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}