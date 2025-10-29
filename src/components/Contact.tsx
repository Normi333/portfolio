import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Terminal, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const templateParams = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                subject: `New message from ${formData.name}`,
                to_email: 'shisirthapa146@gmail.com'
            }

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('EmailJS error:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: 'Email',
            value: 'shisirthapa146@gmail.com',
            link: 'mailto:shisirthapa146@gmail.com',
            variable: 'email'
        },
        {
            icon: <Phone size={24} />,
            title: 'Phone',
            value: '+977-9842534102',
            link: 'tel:+977-9842534102',
            variable: 'phone'
        },
        {
            icon: <MapPin size={24} />,
            title: 'Location',
            value: 'Kathmandu, Nepal',
            link: '#',
            variable: 'location'
        }
    ]

    const terminalLines = [
        '$ whoami',
        'frontend-developer',
        '',
        '$ cat contact.json',
        '{',
        '  "status": "available",',
        '  "response_time": "< 24 hours",',
        '  "preferred_contact": "email",',
        '  "timezone": "UTC+0"',
        '}',
        '',
        '$ echo "Let\'s build something amazing!"',
        'Let\'s build something amazing!',
        '',
        '$ _'
    ]

    return (
        <section id="contact" className="py-20 bg-code-bg-light dark:bg-code-bg-dark transition-colors duration-300">
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
                        <span className="text-code-accent dark:text-code-accent-dark">Get</span>
                        <span className="text-code-text-light dark:text-code-text-dark"> In </span>
                        <span className="text-code-purple dark:text-code-purple-dark">Touch</span>
                    </h2>
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm sm:text-base lg:text-lg transition-colors duration-300">
                        <span className="syntax-comment">/* Let's work together on your next project */</span>
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Terminal Window */}
                        <div className="code-window">
                            <div className="code-header">
                                <div className="code-dot code-dot-red"></div>
                                <div className="code-dot code-dot-yellow"></div>
                                <div className="code-dot code-dot-green"></div>
                                <div className="flex items-center gap-2 ml-4">
                                    <Terminal size={16} className="text-code-text-muted-light dark:text-code-text-muted-dark transition-colors duration-300" />
                                    <span className="text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono transition-colors duration-300">terminal</span>
                                </div>
                            </div>

                            <div className="p-6 bg-code-bg-light dark:bg-code-bg-dark font-mono text-sm space-y-1 transition-colors duration-300">
                                {terminalLines.map((line, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        {line.startsWith('$') && (
                                            <>
                                                <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">$</span>
                                                <span className="text-code-text-light dark:text-code-text-dark ml-2 transition-colors duration-300">{line.substring(2)}</span>
                                            </>
                                        )}
                                        {line === 'frontend-developer' && (
                                            <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">{line}</span>
                                        )}
                                        {line === 'Let\'s build something amazing!' && (
                                            <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">{line}</span>
                                        )}
                                        {(line === '{' || line === '}') && (
                                            <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">{line}</span>
                                        )}
                                        {line.includes('"status"') && (
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">
                                                {'  '}
                                                <span className="text-code-string dark:text-code-string-dark">"status"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">:</span>{' '}
                                                <span className="text-code-string dark:text-code-string-dark">"available"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">,</span>
                                            </span>
                                        )}
                                        {line.includes('"response_time"') && (
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">
                                                {'  '}
                                                <span className="text-code-string dark:text-code-string-dark">"response_time"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">:</span>{' '}
                                                <span className="text-code-string dark:text-code-string-dark">"&lt; 24 hours"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">,</span>
                                            </span>
                                        )}
                                        {line.includes('"preferred_contact"') && (
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">
                                                {'  '}
                                                <span className="text-code-string dark:text-code-string-dark">"preferred_contact"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">:</span>{' '}
                                                <span className="text-code-string dark:text-code-string-dark">"email"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">,</span>
                                            </span>
                                        )}
                                        {line.includes('"timezone"') && (
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">
                                                {'  '}
                                                <span className="text-code-string dark:text-code-string-dark">"timezone"</span>
                                                <span className="text-code-purple dark:text-code-purple-dark">:</span>{' '}
                                                <span className="text-code-string dark:text-code-string-dark">"UTC+05:41:16"</span>
                                            </span>
                                        )}
                                        {line === '' && <span>&nbsp;</span>}
                                        {line === '$ _' && (
                                            <>
                                                <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">$</span>
                                                <span className="terminal-cursor text-code-accent dark:text-code-accent-dark transition-colors duration-300 ml-1">|</span>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-6 transition-colors duration-300">
                                <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">contactInfo</span>{' '}
                                <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>{' '}
                                <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">{`{`}</span>
                            </h3>

                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 p-4 bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-code-accent/20 dark:bg-code-accent-dark/20 rounded-lg flex items-center justify-center text-code-accent dark:text-code-accent-dark group-hover:bg-code-accent dark:group-hover:bg-code-accent-dark group-hover:text-white transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-mono text-sm text-code-text-muted-light dark:text-code-text-muted-dark mb-1 transition-colors duration-300">
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">{info.variable}</span>
                                            <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">:</span>{' '}
                                            <span className="text-code-success dark:text-code-success-dark transition-colors duration-300">"{info.value}"</span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}

                            <div className="text-code-success dark:text-code-success-dark font-mono text-xl mt-4 transition-colors duration-300">
                                <span>{`}`}</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg p-6 transition-colors duration-300"
                        >
                            <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm leading-relaxed transition-colors duration-300">
                                <span className="syntax-comment">/*</span>
                                <br />
                                <span className="syntax-comment ml-2">I'm always interested in new opportunities</span>
                                <br />
                                <span className="syntax-comment ml-2">and exciting projects. Whether you have a</span>
                                <br />
                                <span className="syntax-comment ml-2">question or just want to say hi, feel free</span>
                                <br />
                                <span className="syntax-comment ml-2">to reach out!</span>
                                <br />
                                <span className="syntax-comment">*/</span>
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="code-window">
                            <div className="code-header">
                                <div className="code-dot code-dot-red"></div>
                                <div className="code-dot code-dot-yellow"></div>
                                <div className="code-dot code-dot-green"></div>
                                <div className="flex items-center gap-2 ml-4">
                                    <MessageSquare size={16} className="text-code-text-muted-light dark:text-code-text-muted-dark transition-colors duration-300" />
                                    <span className="text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono transition-colors duration-300">contact_form.js</span>
                                </div>
                            </div>

                            <div className="p-6 bg-code-surface-light dark:bg-code-surface-dark transition-colors duration-300">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="font-mono text-sm text-code-text-light dark:text-code-text-dark mb-4 transition-colors duration-300">
                                            <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">function</span>{' '}
                                            <span className="text-code-accent dark:text-code-accent-dark transition-colors duration-300">sendMessage</span>
                                            <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">() {`{`}</span>
                                        </div>

                                        <div className="ml-4 space-y-4">
                                            <div>
                                                <label className="block text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm mb-2 transition-colors duration-300">
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                                    <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">name</span>{' '}
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-3 bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded-lg text-code-text-light dark:text-code-text-dark font-mono text-sm focus:border-code-accent dark:focus:border-code-accent-dark focus:outline-none transition-colors duration-300"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm mb-2 transition-colors duration-300">
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                                    <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">email</span>{' '}
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="your.email@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-3 bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded-lg text-code-text-light dark:text-code-text-dark font-mono text-sm focus:border-code-accent dark:focus:border-code-accent-dark focus:outline-none transition-colors duration-300"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm mb-2 transition-colors duration-300">
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">const</span>{' '}
                                                    <span className="text-code-text-light dark:text-code-text-dark transition-colors duration-300">message</span>{' '}
                                                    <span className="text-code-purple dark:text-code-purple-dark transition-colors duration-300">=</span>
                                                </label>
                                                <textarea
                                                    name="message"
                                                    placeholder="Your message here..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    className="w-full p-3 bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded-lg text-code-text-light dark:text-code-text-dark font-mono text-sm focus:border-code-accent dark:focus:border-code-accent-dark focus:outline-none transition-colors duration-300 resize-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="font-mono text-sm text-code-text-light dark:text-code-text-dark transition-colors duration-300">
                                            <span>{`}`}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                        whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                        className={`w-full px-6 py-4 text-white font-mono font-semibold rounded-lg transition-all duration-300 glow-border flex items-center justify-center gap-2 ${isSubmitting
                                            ? 'bg-code-text-muted-light dark:bg-code-text-muted-dark cursor-not-allowed'
                                            : submitStatus === 'success'
                                                ? 'bg-code-success dark:bg-code-success-dark'
                                                : submitStatus === 'error'
                                                    ? 'bg-red-500 dark:bg-red-600'
                                                    : 'bg-code-accent dark:bg-code-accent-dark hover:opacity-90'
                                            }`}
                                    >
                                        <Send size={20} />
                                        <span>
                                            {isSubmitting
                                                ? 'sending...'
                                                : submitStatus === 'success'
                                                    ? 'message sent!'
                                                    : submitStatus === 'error'
                                                        ? 'failed to send'
                                                        : 'sendMessage()'
                                            }
                                        </span>
                                    </motion.button>

                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-code-success dark:text-code-success-dark font-mono text-sm text-center"
                                        >
                                            <span className="syntax-comment">// Message sent successfully! I'll get back to you soon.</span>
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-500 dark:text-red-400 font-mono text-sm text-center"
                                        >
                                            <span className="syntax-comment">// Error: Failed to send message. Please try again.</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact