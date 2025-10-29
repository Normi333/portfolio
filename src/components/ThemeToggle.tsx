import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-lg bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'dark' ? 1 : 0,
                        rotate: theme === 'dark' ? 0 : 180,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon size={20} className="text-code-accent-dark" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: theme === 'light' ? 1 : 0,
                        rotate: theme === 'light' ? 0 : -180,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun size={20} className="text-code-accent" />
                </motion.div>
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded px-2 py-1 text-xs font-mono text-code-text-light dark:text-code-text-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
            </div>
        </motion.button>
    )
}

export default ThemeToggle