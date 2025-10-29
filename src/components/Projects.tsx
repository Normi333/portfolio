import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Folder } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

    const handleImageLoad = (projectId: number) => {
        setLoadedImages(prev => new Set(prev).add(projectId))
    }

    const handleImageError = (projectId: number) => {
        setFailedImages(prev => new Set(prev).add(projectId))
        setLoadedImages(prev => new Set(prev).add(projectId))
    }

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio Website',
            description: 'My personal portfolio website featuring a developer-focused design with code syntax highlighting, smooth animations, and responsive layout. Includes working contact form, project showcase, and automated deployment via GitHub Actions.',
            image: 'images/projects/frontend_portfolio.png',
            technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'EmailJS'],
            liveUrl: 'https://normi333.github.io/portfolio/',
            githubUrl: 'https://github.com/Normi333/portfolio',
            featured: true,
            category: 'Frontend',
            achievements: ['100% Lighthouse Performance Score', 'Fully Responsive Design', 'CI/CD Pipeline'],
            challenges: 'Implementing smooth animations while maintaining performance, creating a unique developer-themed design'
        },
        {
            id: 2,
            title: 'Expense Tracker',
            description: 'A simple expense tracking app built with React Native and Expo. Track your income and expenses with charts and categories.',
            image: 'images/projects/dashboard_app.jpg',
            technologies: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Native Chart Kit', 'NativeWind'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Normi333/expense-tracker',
            featured: true,
            category: 'App Development'
        },
        {
            id: 3,
            title: 'Sketch2Image',
            description: 'Academic project: A deep learning project that transforms hand-drawn sketches into realistic images using a U-Net architecture. This model learns to generate detailed outputs from minimal input.',
            image: 'images/projects/aimlui.png',
            technologies: ['Python', 'Flask', 'TensorFlow', 'Pandas'],
            liveUrl: '#',
            githubUrl: 'https://github.com/Normi333/sketch2image',
            featured: true,
            category: 'AI/ML'
        }
    ]

    return (
        <section id="projects" className="py-20 bg-code-surface-light dark:bg-code-surface-dark transition-colors duration-300">
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
                        <span className="text-code-accent dark:text-code-accent-dark">Featured</span>
                        <span className="text-code-text-light dark:text-code-text-dark"> </span>
                        <span className="text-code-purple dark:text-code-purple-dark">Projects</span>
                    </h2>
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm sm:text-base lg:text-lg transition-colors duration-300">
                        <span className="syntax-comment">/* Some of my recent work */</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className={`group relative ${project.featured ? 'sm:col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1' : ''
                                }`}
                        >
                            <div className="code-window h-full">
                                <div className="code-header">
                                    <div className="code-dot code-dot-red"></div>
                                    <div className="code-dot code-dot-yellow"></div>
                                    <div className="code-dot code-dot-green"></div>
                                    <div className="flex items-center gap-2 ml-2 sm:ml-4 flex-1 min-w-0">
                                        <Folder size={14} className="text-code-text-muted-light dark:text-code-text-muted-dark transition-colors duration-300 flex-shrink-0 sm:w-4 sm:h-4" />
                                        <span className="text-code-text-muted-light dark:text-code-text-muted-dark text-xs sm:text-sm font-mono transition-colors duration-300 truncate">
                                            {project.title.toLowerCase().replace(/\s+/g, '_')}.project
                                        </span>
                                        <span className="ml-auto text-xs text-code-accent dark:text-code-accent-dark bg-code-accent/20 dark:bg-code-accent-dark/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded transition-colors duration-300 flex-shrink-0">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="bg-code-bg-light dark:bg-code-bg-dark transition-colors duration-300">
                                    {/* Project Image */}
                                    <div className="relative h-40 sm:h-48 overflow-hidden bg-code-surface-light dark:bg-code-surface-dark">
                                        {/* Loading skeleton */}
                                        {!loadedImages.has(project.id) && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-code-surface-light via-code-border-light to-code-surface-light dark:from-code-surface-dark dark:via-code-border-dark dark:to-code-surface-dark animate-pulse">
                                                <div className="flex items-center justify-center h-full">
                                                    <div className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm">
                                                        Loading...
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Show image only if it hasn't failed */}
                                        {!failedImages.has(project.id) && (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${loadedImages.has(project.id) ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                                loading="lazy"
                                                decoding="async"
                                                onLoad={() => handleImageLoad(project.id)}
                                                onError={() => handleImageError(project.id)}
                                            />
                                        )}

                                        {/* Fallback content when image fails to load */}
                                        {failedImages.has(project.id) && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-code-surface-light to-code-border-light dark:from-code-surface-dark dark:to-code-border-dark flex flex-col items-center justify-center">
                                                <div className="text-center p-4">
                                                    <Folder size={32} className="text-code-text-muted-light dark:text-code-text-muted-dark mx-auto mb-2" />
                                                    <h4 className="text-code-text-light dark:text-code-text-dark font-mono text-sm font-semibold mb-1">
                                                        {project.title}
                                                    </h4>
                                                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-xs">
                                                        {project.category}
                                                    </p>
                                                    <div className="mt-2 text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-xs opacity-60">
                                                        Image preview unavailable
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-code-bg-light/80 dark:bg-code-bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 sm:gap-4">
                                            <motion.a
                                                href={project.liveUrl}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-10 h-10 sm:w-12 sm:h-12 bg-code-accent dark:bg-code-accent-dark text-white rounded-lg flex items-center justify-center hover:opacity-90 transition-all duration-300"
                                                aria-label={`View ${project.title} live demo`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-10 h-10 sm:w-12 sm:h-12 bg-code-text-light dark:bg-code-text-dark text-code-bg-light dark:text-code-bg-dark rounded-lg flex items-center justify-center hover:opacity-90 transition-all duration-300"
                                                aria-label={`View ${project.title} source code`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={18} className="sm:w-5 sm:h-5" />
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-3 group-hover:text-code-accent dark:group-hover:text-code-accent-dark transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark text-sm leading-relaxed mb-4 font-mono transition-colors duration-300">
                                            <span className="syntax-comment">/*</span>
                                            <br />
                                            <span className="syntax-comment ml-2">{project.description}</span>
                                            <br />
                                            <span className="syntax-comment">*/</span>
                                        </p>

                                        <div className="mb-4">
                                            <div className="text-code-purple dark:text-code-purple-dark font-mono text-sm mb-2 transition-colors duration-300">
                                                <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                                <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">technologies</span>{' '}
                                                <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>{' '}
                                                <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">[</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-2 sm:ml-4 mb-2">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="text-xs font-mono bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark text-code-accent dark:text-code-accent-dark px-1.5 sm:px-2 py-0.5 sm:py-1 rounded hover:border-code-accent dark:hover:border-code-accent-dark transition-colors duration-300"
                                                    >
                                                        "{tech}"
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="text-code-success dark:text-code-success-dark font-mono text-sm transition-colors duration-300">
                                                <span>];</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                            <a
                                                href={project.liveUrl}
                                                className="flex items-center gap-2 text-code-accent dark:text-code-accent-dark hover:text-code-purple dark:hover:text-code-purple-dark transition-colors duration-300 font-mono text-sm"
                                            >
                                                <Code2 size={16} />
                                                <span>Live Demo</span>
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                className="flex items-center gap-2 text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-text-light dark:hover:text-code-text-dark transition-colors duration-300 font-mono text-sm"
                                            >
                                                <Github size={16} />
                                                <span>Source Code</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://github.com/Normi333?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-code-accent text-code-bg font-mono font-semibold rounded-lg hover:bg-code-accent/90 transition-all duration-300 glow-border flex items-center gap-2"
                        >
                            <Folder size={20} />
                            <span>viewAllProjects()</span>
                        </a>
                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm">
                            <span className="syntax-comment">// More projects coming soon!</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects