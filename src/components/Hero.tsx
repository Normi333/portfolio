import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2 } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const fullText = 'Frontend Developer'

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, 150)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, fullText])

    const codeSnippets = [
        'function createAwesome() {',
        '  return "Beautiful UIs";',
        '}',
        '',
        'const skills = [',
        '  "React", "TypeScript",',
        '  "Node.js", "Python"',
        '];'
    ]

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden matrix-bg pt-20 sm:pt-24 md:pt-20">
            {/* Floating Code Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="floating-code"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`
                        }}
                    >
                        {['<div>', '</div>', 'const', 'function', '=>', '{}', '[]', '()'][Math.floor(Math.random() * 8)]}
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 mt-4 sm:mt-0"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-lg transition-colors duration-300"
                        >
                            <span className="syntax-comment">// Welcome to my portfolio</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-code-text-light dark:text-code-text-dark font-mono transition-colors duration-300"
                        >
                            <span className="syntax-keyword">Hello</span>
                            <span className="text-code-text-light dark:text-code-text-dark">, I'm</span>
                            <br />
                            <span className="text-code-accent dark:text-code-accent-dark">Shisir Thapa</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono text-code-purple dark:text-code-purple-dark transition-colors duration-300 h-8 sm:h-10 md:h-12 lg:h-16 flex items-center"
                        >
                            <div>
                                <span className="syntax-keyword">const</span>{' '}
                                <span className="text-code-text-light dark:text-code-text-dark">role</span>{' '}
                                <span className="text-code-purple dark:text-code-purple-dark">=</span>{' '}
                                <span className="syntax-string">"{displayText}"</span>
                                <span className="terminal-cursor text-code-accent dark:text-code-accent-dark">|</span>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-sm sm:text-base lg:text-lg text-code-text-muted-light dark:text-code-text-muted-dark max-w-lg leading-relaxed font-mono transition-colors duration-300"
                        >
                            <span className="syntax-comment">/*</span>
                            <br />
                            <span className="syntax-comment ml-2">I craft beautiful, responsive web applications</span>
                            <br />
                            <span className="syntax-comment ml-2">with modern technologies and clean code.</span>
                            <br />
                            <span className="syntax-comment">*/</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <a
                                href="#projects"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-code-accent dark:bg-code-accent-dark text-white font-mono font-semibold rounded-lg hover:opacity-90 transition-all duration-300 glow-border flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <Code2 size={18} className="sm:w-5 sm:h-5" />
                                <span>viewProjects()</span>
                            </a>
                            <a
                                href="/cv/Shisir_Thapa_CV.pdf"
                                download="Shisir_Thapa_CV.pdf"
                                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-code-accent dark:border-code-accent-dark text-code-accent dark:text-code-accent-dark font-mono font-semibold rounded-lg hover:bg-code-accent dark:hover:bg-code-accent-dark hover:!text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                            >
                                <Terminal size={18} className="sm:w-5 sm:h-5" />
                                <span>downloadCV()</span>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="flex gap-3 sm:gap-4 pt-4 pb-8 sm:pb-12 justify-center sm:justify-start"
                        >
                            {[
                                { icon: Github, href: 'https://github.com/Normi333', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/shisir-thapa-0297812b9/', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:shisirthapa146@gmail.com', label: 'Email' }
                            ].map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg flex items-center justify-center text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-accent dark:hover:text-code-accent-dark hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300"
                                >
                                    <Icon size={18} className="sm:w-5 sm:h-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="relative mb-8 sm:mb-12 lg:mb-0"
                    >
                        <div className="code-window max-w-sm sm:max-w-md mx-auto">
                            <div className="code-header">
                                <div className="code-dot code-dot-red"></div>
                                <div className="code-dot code-dot-yellow"></div>
                                <div className="code-dot code-dot-green"></div>
                                <span className="ml-2 sm:ml-4 text-code-text-muted-light dark:text-code-text-muted-dark text-xs sm:text-sm font-mono">developer.js</span>
                            </div>
                            <div className="p-3 sm:p-4 lg:p-6 bg-code-bg-light dark:bg-code-bg-dark font-mono text-xs sm:text-sm space-y-1 sm:space-y-2 transition-colors duration-300">
                                {codeSnippets.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        className="flex"
                                    >
                                        <span className="text-code-text-muted-light dark:text-code-text-muted-dark mr-2 sm:mr-4 select-none text-xs sm:text-sm">
                                            {line ? (index + 1).toString().padStart(2, '0') : '  '}
                                        </span>
                                        <span className="text-code-text-light dark:text-code-text-dark">
                                            {line.includes('function') && (
                                                <>
                                                    <span className="syntax-keyword">function</span>
                                                    <span className="syntax-function"> createAwesome</span>
                                                    <span>() {`{`}</span>
                                                </>
                                            )}
                                            {line.includes('return') && (
                                                <>
                                                    <span className="ml-4 syntax-keyword">return</span>
                                                    <span className="syntax-string"> "Beautiful UIs"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line === '}' && <span>{`}`}</span>}
                                            {line.includes('const') && (
                                                <>
                                                    <span className="syntax-keyword">const</span>
                                                    <span> skills </span>
                                                    <span className="text-code-purple">=</span>
                                                    <span> [</span>
                                                </>
                                            )}
                                            {line.includes('"React"') && (
                                                <span className="ml-4 syntax-string">"React", "TypeScript",</span>
                                            )}
                                            {line.includes('"Node.js"') && (
                                                <span className="ml-4 syntax-string">"Node.js", "Express.js"</span>
                                            )}
                                            {line === '];' && <span>];</span>}
                                            {!line && <span>&nbsp;</span>}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-code-text-muted-light dark:text-code-text-muted-dark"
                    >
                        <ArrowDown size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero