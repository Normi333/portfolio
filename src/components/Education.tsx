import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Computer Engineering',
            institution: 'Kantipur Engineering College, Tribhuvan University',
            location: 'Dhapakhel, Nepal',
            period: '2021 - 2025',
            // gpa: '',
            // description: '',
            // achievements: [
            // ],
            courses: [
                'Data Structures & Algorithms',
                'Web Development',
                'Database Systems',
                'Software Engineering',
                'Computer Networks',
                'Machine Learning'
            ]
        },
        {
            degree: 'MERN Stack Training',
            institution: 'Broadway Infosys',
            location: 'Tinkune, Kathmandu',
            period: '2024-2025',
            gpa: 'Certificate',
            description: 'Program focused on modern web development technologies including React, Node.js, and cloud deployment.',
            courses: [
                'React & Redux',
                'Node.js & Express',
                'MongoDB & PostgreSQL',
            ]
        }
    ]

    const certifications = [
        {
            name: 'MERN Stack Training',
            issuer: 'Broadway Infosys',
            date: '2025',
            credentialId: 'B55471000'
        },
        {
            name: 'Flutter Bootcamp',
            issuer: 'Broadway Infosys',
            date: '2023',
            // credentialId: ''
        },
        {
            name: 'KEC LITE',
            issuer: 'Kantipur Engineering College',
            date: '2024',
            // credentialId: ''
        }
    ]

    return (
        <section id="education" className="py-20 bg-code-bg-light dark:bg-code-bg-dark transition-colors duration-300">
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
                        <span className="text-code-accent dark:text-code-accent-dark">Education</span>
                        <span className="text-code-text-light dark:text-code-text-dark"> & </span>
                        <span className="text-code-purple dark:text-code-purple-dark">Certifications</span>
                    </h2>
                    <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm sm:text-base lg:text-lg transition-colors duration-300">
                        <span className="syntax-comment">/* My learning journey */</span>
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl lg:text-2xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-6 sm:mb-8 transition-colors duration-300"
                    >
                        <span className="syntax-keyword">class</span>{' '}
                        <span className="text-code-accent dark:text-code-accent-dark">Education</span>{' '}
                        <span className="text-code-text-light dark:text-code-text-dark">{`{`}</span>
                    </motion.h3>

                    <div className="space-y-6 lg:space-y-8">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="code-window">
                                    <div className="code-header">
                                        <div className="code-dot code-dot-red"></div>
                                        <div className="code-dot code-dot-yellow"></div>
                                        <div className="code-dot code-dot-green"></div>
                                        <span className="ml-4 text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono flex items-center gap-2 transition-colors duration-300">
                                            <GraduationCap size={16} />
                                            {edu.institution.toLowerCase().replace(/\s+/g, '_')}.edu
                                        </span>
                                    </div>

                                    <div className="p-6 bg-code-surface-light dark:bg-code-surface-dark transition-colors duration-300">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="text-xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-2 transition-colors duration-300">
                                                    {edu.degree}
                                                </h4>
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex items-center gap-2 text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                                                        <BookOpen size={16} />
                                                        <span>{edu.institution}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                                                        <MapPin size={16} />
                                                        <span>{edu.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm transition-colors duration-300">
                                                        <Calendar size={16} />
                                                        <span>{edu.period}</span>
                                                    </div>
                                                    {/* <div className="flex items-center gap-2 text-code-accent dark:text-code-accent-dark font-mono text-sm font-semibold transition-colors duration-300">
                                                        <Award size={16} />
                                                        <span>{edu.gpa}</span>
                                                    </div> */}
                                                </div>
                                                <p className="text-code-text-muted-light dark:text-code-text-muted-dark text-sm leading-relaxed mb-4 transition-colors duration-300">
                                                    {edu.description}
                                                </p>

                                                {/* <div className="mb-4">
                                                    <h5 className="text-code-accent dark:text-code-accent-dark font-mono font-semibold mb-2 transition-colors duration-300">Achievements:</h5>
                                                    <ul className="space-y-1">
                                                        {edu.achievements.map((achievement, i) => (
                                                            <li key={i} className="text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono flex items-start gap-2 transition-colors duration-300">
                                                                <span className="text-code-success dark:text-code-success-dark">•</span>
                                                                <span>{achievement}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div> */}
                                            </div>

                                            <div>
                                                <h5 className="text-code-purple dark:text-code-purple-dark font-mono font-semibold mb-3 transition-colors duration-300">Key Courses:</h5>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {edu.courses.map((course, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, x: 20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.2 + i * 0.1, duration: 0.3 }}
                                                            viewport={{ once: true }}
                                                            className="bg-code-bg-light dark:bg-code-bg-dark border border-code-border-light dark:border-code-border-dark rounded px-3 py-2 text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm hover:border-code-accent dark:hover:border-code-accent-dark transition-colors duration-300"
                                                        >
                                                            <span className="syntax-string">"{course}"</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-code-text-light dark:text-code-text-dark font-mono text-xl mt-8 transition-colors duration-300"
                    >
                        <span>{`}`}</span>
                    </motion.div>
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-code-text-light dark:text-code-text-dark font-mono mb-6 sm:mb-8 transition-colors duration-300">
                        <span className="syntax-keyword">const</span>{' '}
                        <span className="text-code-accent dark:text-code-accent-dark">certifications</span>{' '}
                        <span className="text-code-purple dark:text-code-purple-dark">=</span>{' '}
                        <span className="text-code-success dark:text-code-success-dark">[</span>
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark rounded-lg p-4 sm:p-6 hover:border-code-accent dark:hover:border-code-accent-dark transition-all duration-300"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-code-accent/20 dark:bg-code-accent-dark/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                                        <Award className="w-6 h-6 text-code-accent dark:text-code-accent-dark transition-colors duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-code-text-light dark:text-code-text-dark font-mono font-semibold mb-1 transition-colors duration-300">
                                            {cert.name}
                                        </h4>
                                        <p className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-sm mb-2 transition-colors duration-300">
                                            {cert.issuer}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-code-accent dark:text-code-accent-dark font-mono text-sm transition-colors duration-300">
                                                {cert.date}
                                            </span>
                                            <span className="text-code-text-muted-light dark:text-code-text-muted-dark font-mono text-xs transition-colors duration-300">
                                                ID: {cert.credentialId}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-code-success dark:text-code-success-dark font-mono text-xl transition-colors duration-300">
                        <span>];</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education