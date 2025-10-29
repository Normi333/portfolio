import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught:', error, errorInfo)
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-code-bg-light dark:bg-code-bg-dark p-4">
                    <div className="code-window max-w-md mx-auto">
                        <div className="code-header">
                            <div className="code-dot code-dot-red"></div>
                            <div className="code-dot code-dot-yellow"></div>
                            <div className="code-dot code-dot-green"></div>
                            <span className="ml-4 text-code-text-muted-light dark:text-code-text-muted-dark text-sm font-mono">
                                error.js
                            </span>
                        </div>
                        <div className="p-6 bg-code-bg-light dark:bg-code-bg-dark font-mono text-sm space-y-4">
                            <div className="text-red-500">
                                <span className="syntax-keyword">try</span> {`{`}
                                <br />
                                <span className="ml-4 text-code-text-light dark:text-code-text-dark">
                                    // Oops! Something went wrong 🐛
                                </span>
                                <br />
                                {`}`} <span className="syntax-keyword">catch</span> (error) {`{`}
                                <br />
                                <span className="ml-4 text-red-500">
                                    console.error("Don't worry, I got this!");
                                </span>
                                <br />
                                {`}`}
                            </div>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-4 py-2 bg-code-accent dark:bg-code-accent-dark text-white rounded-lg hover:opacity-90 transition-all duration-300 font-mono"
                            >
                                reload()
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary