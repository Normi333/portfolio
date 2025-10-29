# Shisir Thapa - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Theme switching capability
- **Modern UI** - Clean, developer-focused design
- **Smooth Animations** - Framer Motion animations
- **Contact Form** - EmailJS integration
- **SEO Optimized** - Meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Normi333/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

The project includes a GitHub Actions workflow that automatically:

- Builds the project on every push to `main`
- Runs tests (if any)
- Deploys to GitHub Pages

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to GitHub Pages:

```bash
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv/
│   │   └── Shisir_Thapa_CV.pdf
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── App.tsx
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will handle the rest

## 📝 Customization

1. **Personal Information**: Update content in components
2. **Styling**: Modify Tailwind classes or CSS variables
3. **Projects**: Add your projects in `Projects.tsx`
4. **CV**: Replace `public/cv/Shisir_Thapa_CV.pdf` with your CV

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: shisirthapa146@gmail.com
- **LinkedIn**: [Shisir Thapa](https://www.linkedin.com/in/shisir-thapa-0297812b9/)
- **GitHub**: [Normi333](https://github.com/Normi333)

---

Built with ❤️ by Shisir Thapa
