import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Tech',
            skills: [
                {
                    name: 'React',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                    color: '#61DAFB'
                },
                {
                    name: 'TypeScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
                    color: '#3178C6'
                },
                {
                    name: 'JavaScript',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                    color: '#F7DF1E'
                },
                {
                    name: 'Next.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                    color: '#000000'
                },
                {
                    name: 'HTML5',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
                    color: '#E34F26'
                },
                {
                    name: 'CSS3',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
                    color: '#1572B6'
                },
                {
                    name: 'Tailwind CSS',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
                    color: '#06B6D4'
                }
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                {
                    name: 'Node.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                    color: '#339933'
                },
                {
                    name: 'Express.js',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
                    color: '#000000'
                },
                {
                    name: 'MongoDB',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                    color: '#47A248'
                },
                {
                    name: 'PostgreSQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
                    color: '#336791'
                },
                {
                    name: 'MySQL',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
                    color: '#4479A1'
                }
            ]
        },
        {
            title: 'Tools & DevOps',
            skills: [
                {
                    name: 'Git',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
                    color: '#F05032'
                },
                {
                    name: 'Docker',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
                    color: '#2496ED'
                },
                {
                    name: 'VS Code',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
                    color: '#007ACC'
                },
                {
                    name: 'Figma',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
                    color: '#F24E1E'
                },
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-code-surface-light dark:bg-code-surface-dark transition-colors duration-300">
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
                        <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">Skills</span>
                        <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300"> & </span>
                        <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">Technologies</span>
                    </h2>
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm sm:text-base lg:text-lg transition-colors duration-300">
                        <span className="syntax-comment">/* Technologies I work with */</span>
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="code-window"
                        >
                            <div className="code-header">
                                <div className="code-dot code-dot-red"></div>
                                <div className="code-dot code-dot-yellow"></div>
                                <div className="code-dot code-dot-green"></div>
                                <span className="ml-4 text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono transition-colors duration-300">
                                    {category.title.toLowerCase().replace(/\s+/g, '_')}.js
                                </span>
                            </div>

                            <div className="p-4 sm:p-6 lg:p-8 bg-code-bg-light dark:bg-code-bg-dark transition-colors duration-300">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-6 sm:mb-8 text-center transition-colors duration-300">
                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                    <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">{category.title.replace(/\s+/g, '')}</span>{' '}
                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>{' '}
                                    <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">[</span>
                                </h3>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                                duration: 0.5
                                            }}
                                            viewport={{ once: true }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 5,
                                                transition: { duration: 0.2 }
                                            }}
                                            className="flex flex-col items-center group cursor-pointer"
                                        >
                                            <div className="relative">
                                                <div
                                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark flex items-center justify-center mb-2 sm:mb-3 transition-all duration-300 group-hover:border-code-accent dark:group-hover:border-code-accent-dark skill-logo"
                                                    style={{
                                                        boxShadow: `0 0 20px ${skill.color}20`
                                                    }}
                                                >
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 skill-logo"
                                                        style={{
                                                            filter: 'brightness(0.8)'
                                                        }}
                                                    />
                                                </div>
                                                <motion.div
                                                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                                    style={{
                                                        background: `radial-gradient(circle, ${skill.color} 0%, transparent 70%)`
                                                    }}
                                                />
                                            </div>
                                            <span className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-xs sm:text-sm text-center group-hover:text-code-accent dark:group-hover:text-code-accent-dark transition-colors duration-300 leading-tight">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="text-center mt-8">
                                    <span className="text-code-success dark:text-code-success-dark font-mono text-xl transition-colors duration-300">];</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-lg transition-colors duration-300">
                        <span className="syntax-comment">// Always learning and exploring new technologies</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills