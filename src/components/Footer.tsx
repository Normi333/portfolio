import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-code-bg-light dark:bg-code-bg-dark border-t border-code-border-light dark:border-code-border-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono transition-colors duration-300">
                            <span className="text-code-accent dark:text-code-accent-dark">&lt;</span>
                            <span>Shisir</span>
                            <span className="text-code-accent dark:text-code-accent-dark">/&gt;</span>
                        </h3>
                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                            <span className="syntax-comment">// Frontend Developer</span>
                            <br />
                            {/* <span className="syntax-comment">// Crafting digital experiences</span> */}
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold text-code-text-light dark:text-code-text-dark font-mono transition-colors duration-300">
                            <span className="syntax-keyword">const</span> <span className="text-code-purple dark:text-code-purple-dark">links</span> = [
                        </h4>
                        <div className="space-y-2 ml-4">
                            {[
                                { name: 'Home', href: '#home' },
                                { name: 'About', href: '#about' },
                                { name: 'Projects', href: '#projects' },
                                { name: 'Contact', href: '#contact' }
                            ].map((link) => (
                                <div key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-accent dark:hover:text-code-accent-dark transition-colors duration-300 font-mono text-sm"
                                    >
                                        <span className="syntax-string">"{link.name}"</span>,
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="text-code-success dark:text-code-success-dark font-mono text-sm transition-colors duration-300">
                            ];
                        </div>
                    </motion.div>

                    {/* Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-lg font-semibold text-code-text-light dark:text-code-text-dark font-mono transition-colors duration-300">
                            <span className="syntax-comment">// Let's connect</span>
                        </h4>
                        <div className="flex gap-4">
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
                                    className="w-10 h-10 bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg flex items-center justify-center text-code-text-muted-light dark:text-code-text-muted-dark hover:text-code-accent dark:hover:text-code-accent-dark hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Back to Top Button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 px-4 py-2 bg-code-accent dark:bg-code-accent-dark text-white font-mono text-sm rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2"
                        >
                            <ArrowUp size={16} />
                            <span>scrollToTop()</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="pt-8 border-t border-code-border-light dark:border-code-border-dark"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300 text-center sm:text-left">
                            <span className="syntax-comment">© 2025 Shisir Thapa. Built with </span>
                            <Heart size={14} className="inline text-red-500 mx-1" />
                            <span className="syntax-comment"> and React</span>
                        </p>
                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                            <span className="syntax-comment">// Thanks for visiting!</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer