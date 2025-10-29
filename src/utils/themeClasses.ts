// Utility function to generate theme-aware class names
export const themeClasses = {
  // Background colors
  bg: {
    primary: "bg-code-bg-light dark:bg-code-bg-dark",
    surface: "bg-code-surface-light dark:bg-code-surface-dark",
    card: "bg-code-surface-light dark:bg-code-surface-dark",
  },

  // Text colors
  text: {
    primary: "text-code-text-light dark:text-code-text-dark",
    muted: "text-code-text-muted-light dark:text-code-text-muted-dark",
    accent: "text-code-accent dark:text-code-accent-dark",
    success: "text-code-success dark:text-code-success-dark",
    warning: "text-code-warning dark:text-code-warning-dark",
    error: "text-code-error dark:text-code-error-dark",
    purple: "text-code-purple dark:text-code-purple-dark",
  },

  // Border colors
  border: {
    primary: "border-code-border-light dark:border-code-border-dark",
    accent: "border-code-accent dark:border-code-accent-dark",
  },

  // Hover states
  hover: {
    text: {
      accent: "hover:text-code-accent dark:hover:text-code-accent-dark",
      primary: "hover:text-code-text-light dark:hover:text-code-text-dark",
    },
    border: {
      accent: "hover:border-code-accent dark:hover:border-code-accent-dark",
    },
    bg: {
      surface: "hover:bg-code-surface-light dark:hover:bg-code-surface-dark",
    },
  },

  // Common combinations
  card: "bg-code-surface-light dark:bg-code-surface-dark border border-code-border-light dark:border-code-border-dark",
  button: {
    primary:
      "bg-code-accent dark:bg-code-accent-dark text-white hover:opacity-90",
    secondary:
      "border-2 border-code-accent dark:border-code-accent-dark text-code-accent dark:text-code-accent-dark hover:bg-code-accent dark:hover:bg-code-accent-dark hover:text-white",
  },

  // Transitions
  transition: "transition-colors duration-300",
};
