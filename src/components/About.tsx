import { motion } from 'framer-motion'
import { Code, Lightbulb, Users, Terminal, Zap } from 'lucide-react'

const About = () => {
    const highlights = [
        {
            icon: <Code size={24} className="sm:w-8 sm:h-8" />,
            title: 'Clean Code',
            description: 'Writing maintainable, scalable code following best practices and SOLID principles'
        },
        {
            icon: <Lightbulb size={24} className="sm:w-8 sm:h-8" />,
            title: 'Problem Solving',
            description: 'Creative solutions to complex technical challenges with analytical thinking'
        },
        {
            icon: <Users size={24} className="sm:w-8 sm:h-8" />,
            title: 'Team Collaboration',
            description: 'Working effectively with cross-functional teams using Agile methodologies'
        },
        {
            icon: <Zap size={24} className="sm:w-8 sm:h-8" />,
            title: 'Performance Optimization',
            description: 'Building fast, efficient applications with optimal user experience'
        }
    ]

    const codeSnippet = [
        'class Developer {',
        '  constructor() {',
        '    this.name = "[Your Name]";',
        '    this.role = "Frontend Developer";',
        '    this.experience = "3+ years";',
        '    this.passion = "Creating amazing UIs";',
        '  }',
        '',
        '  getSkills() {',
        '    return [',
        '      "React", "TypeScript", "Node.js",',
        '      "Python", "AWS", "Docker"',
        '    ];',
        '  }',
        '',
        '  getCurrentFocus() {',
        '    return "Building scalable web apps";',
        '  }',
        '}'
    ]

    return (
        <section id="about" className="py-20 bg-code-surface-light dark:bg-code-surface-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-4 transition-colors duration-300">
                        <span className="syntax-comment">// </span>
                        <span className="text-code-accent dark:text-code-accent-dark">About</span>
                        <span className="text-code-text-light dark:text-code-text-dark"> </span>
                        <span className="text-code-purple dark:text-code-purple-dark">Me</span>
                    </h2>
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm sm:text-base lg:text-lg transition-colors duration-300">
                        <span className="syntax-comment">/* Get to know me better */</span>
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="code-window">
                            <div className="code-header">
                                <div className="code-dot code-dot-red"></div>
                                <div className="code-dot code-dot-yellow"></div>
                                <div className="code-dot code-dot-green"></div>
                                <span className="ml-2 sm:ml-4 text-code-text-muted-light dark:text-code-text-muted-dark text-xs sm:text-sm font-mono flex items-center gap-2 transition-colors duration-300">
                                    <Terminal size={14} className="sm:w-4 sm:h-4" />
                                    about_me.js
                                </span>
                            </div>

                            <div className="p-3 sm:p-4 lg:p-6 bg-code-bg-light dark:bg-code-bg-dark font-mono text-xs sm:text-sm space-y-1 transition-colors duration-300">
                                {codeSnippet.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.3 }}
                                        viewport={{ once: true }}
                                        className="flex"
                                    >
                                        <span className="text-code-text-muted-light dark:text-code-text-muted-dark mr-4 select-none w-6 text-right">
                                            {line ? (index + 1).toString().padStart(2, '0') : '  '}
                                        </span>
                                        <span className="text-code-text-light dark:text-code-text-dark">
                                            {line.includes('class') && (
                                                <>
                                                    <span className="syntax-keyword">class</span>
                                                    <span className="text-code-accent dark:text-code-accent-dark"> Developer</span>
                                                    <span> {`{`}</span>
                                                </>
                                            )}
                                            {line.includes('constructor') && (
                                                <span className="ml-4 syntax-function">constructor() {`{`}</span>
                                            )}
                                            {line.includes('this.name') && (
                                                <>
                                                    <span className="ml-8 text-code-text-light dark:text-code-text-dark">this.name = </span>
                                                    <span className="syntax-string">"Shisir Thapa"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line.includes('this.role') && (
                                                <>
                                                    <span className="ml-8 text-code-text-light dark:text-code-text-dark">this.role = </span>
                                                    <span className="syntax-string">"Frontend Developer"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line.includes('this.experience') && (
                                                <>
                                                    <span className="ml-8 text-code-text-light dark:text-code-text-dark">this.experience = </span>
                                                    <span className="syntax-string">"1 year"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line.includes('this.passion') && (
                                                <>
                                                    <span className="ml-8 text-code-text-light dark:text-code-text-dark">this.passion = </span>
                                                    <span className="syntax-string">"Creating amazing UIs"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line.includes('getSkills') && (
                                                <span className="ml-4 syntax-function">getSkills() {`{`}</span>
                                            )}
                                            {line.includes('return [') && (
                                                <>
                                                    <span className="ml-8 syntax-keyword">return</span>
                                                    <span> [</span>
                                                </>
                                            )}
                                            {line.includes('"React"') && (
                                                <span className="ml-10 syntax-string">"React", "TypeScript", "Node.js",</span>
                                            )}
                                            {line.includes('"Python"') && (
                                                <span className="ml-10 syntax-string">"Python", "Git", "Docker"</span>
                                            )}
                                            {line.includes('getCurrentFocus') && (
                                                <span className="ml-4 syntax-function">getCurrentFocus() {`{`}</span>
                                            )}
                                            {line.includes('Building scalable') && (
                                                <>
                                                    <span className="ml-8 syntax-keyword">return</span>
                                                    <span className="syntax-string"> "Building scalable web apps"</span>
                                                    <span>;</span>
                                                </>
                                            )}
                                            {line === '  }' && <span className="ml-4">{`}`}</span>}
                                            {line === '}' && <span>{`}`}</span>}
                                            {line === '    ];' && <span className="ml-8">];</span>}
                                            {!line && <span>&nbsp;</span>}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded-lg p-6 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-4 transition-colors duration-300">
                                <span className="syntax-comment">// </span>
                                <span className="text-code-accent dark:text-code-accent-dark">Quick Stats</span>
                            </h3>
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { number: '50+', label: 'Projects' },
                                    { number: '3+', label: 'Years Exp' },
                                    { number: '100%', label: 'Satisfaction' }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="text-2xl font-bold text-code-accent dark:text-code-accent-dark font-mono transition-colors duration-300">
                                            {stat.number}
                                        </div>
                                        <div className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded-lg p-6 transition-colors duration-300">
                            <h3 className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-4 transition-colors duration-300">
                                <span className="syntax-keyword">function</span>{' '}
                                <span className="syntax-function">aboutMe</span>
                                <span className="text-code-text-light dark:text-code-text-dark">() {`{`}</span>
                            </h3>
                            <div className="space-y-4 text-code-text-muted-light dark:text-code-text-muted-dark leading-relaxed transition-colors duration-300">
                                <p className="font-mono text-sm">
                                    <span className="syntax-comment">/*</span>
                                    <br />
                                    <span className="syntax-comment ml-2">I'm a passionate frontend developer with {1}+ years</span>
                                    <br />
                                    <span className="syntax-comment ml-2">of experience building modern web applications.</span>
                                    <br />
                                    <span className="syntax-comment ml-2">I specialize in React, TypeScript, and creating</span>
                                    <br />
                                    <span className="syntax-comment ml-2">responsive, accessible interfaces that users love.</span>
                                    <br />
                                    <span className="syntax-comment">*/</span>
                                </p>
                                <p className="font-mono text-sm">
                                    <span className="syntax-comment">/*</span>
                                    <br />
                                    <span className="syntax-comment ml-2">When I'm not coding, you can find me exploring</span>
                                    <br />
                                    <span className="syntax-comment ml-2">new technologies, contributing to open source,</span>
                                    <br />
                                    <span className="syntax-comment ml-2">or enjoying the outdoors — especially trekking</span>
                                    <br />
                                    <span className="syntax-comment ml-2">and spending time in the mountains.</span>
                                    <br />
                                    <span className="syntax-comment">*/</span>
                                </p>
                            </div>
                            <div className="mt-4 text-code-text-light dark:text-code-text-dark font-mono transition-colors duration-300">
                                <span>{`}`}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {highlights.map((highlight, index) => (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg p-4 hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300 group"
                                >
                                    <div className="text-code-accent dark:text-code-accent-dark mb-3 group-hover:text-code-purple dark:group-hover:text-code-purple-dark transition-colors duration-300">
                                        {highlight.icon}
                                    </div>
                                    <h4 className="text-code-text-light dark:text-code-text-dark font-mono font-semibold mb-2 transition-colors duration-300">
                                        {highlight.title}
                                    </h4>
                                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm leading-relaxed transition-colors duration-300">
                                        {highlight.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About