import { motion } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: 'home', href: '#home' },
        { name: 'about', href: '#about' },
        { name: 'skills', href: '#skills' },
        { name: 'education', href: '#education' },
        { name: 'projects', href: '#projects' },
        { name: 'contact', href: '#contact' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-code-surface-light/95 dark:bg-code-surface-dark/95 backdrop-blur-md border-b border-code-border-light dark:border-code-border-dark transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2"
                    >
                        <Terminal className="w-6 h-6 text-code-accent dark:text-code-accent-dark" />
                        <span className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-code">
                            <span className="text-code-accent dark:text-code-accent-dark">const</span>{' '}
                            <span className="text-code-text-light dark:text-code-text-dark">developer</span>{' '}
                            <span className="text-code-purple dark:text-code-purple-dark">=</span>{' '}
                            <span className="text-code-success dark:text-code-success-dark">"portfolio"</span>
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <div className="flex items-center gap-6 lg:gap-8">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                    className="relative text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-accent dark:hover:text-code-accent-dark transition-colors duration-300 font-mono text-sm group"
                                >
                                    <span className="syntax-comment">//</span> {item.name}
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-0.5 bg-code-accent dark:bg-code-accent-dark"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.a>
                            ))}
                        </div>
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="p-2 text-code-text-light dark:text-code-text-dark hover:text-code-accent dark:hover:text-code-accent-dark transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden pb-4 border-t border-code-border-light dark:border-code-border-dark mt-4 pt-4"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-accent dark:hover:text-code-accent-dark transition-colors font-mono"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="syntax-comment">//</span> {item.name}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </div>
        </motion.header>
    )
}

export default Header