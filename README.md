# Yabsra's Digital Canvas 🎨⚡

> **Personal Portfolio & Engineering Showcase of Yabsra Fekadu**  
> AI & Data Engineer specializing in real-time streaming architectures (Kafka, Airflow, PySpark), LLM training, and full-stack software development.

---

## 🌟 Highlights & Features

- **Dynamic Hero Section**: Availability ping badge (`Available for AI & Data Roles`), bold gradient typography, live stats bar (`3+ Years in Tech`, `6+ Certifications`, `100% Production Ready`), and direct social connectivity.
- **Interactive Technical Arsenal**: Categorized filtering across **AI & Machine Learning**, **Data Engineering**, **Backend & APIs**, and **Cloud & DevOps** with proficiency badges, accompanied by a continuous marquee ribbon.
- **Work Experience Timeline**: Interactive career progression including role at **IE Network Solutions** (`AI & Data Engineer`) with active role pulsing badge, key responsibilities, and technical stacks.
- **Project Showcase & Architecture Dialogs**: Deep-dive project cards featuring a modal with step-by-step data flows, pipeline architectures, engineered business impacts, and GitHub links.
- **Certifications**: Verified DataCamp and specialized credentials with topic tags and verification status indicators.
- **Direct Interactive Messaging**: Integrated contact form with validation, mail client dispatch, one-click email copying with Sonner notifications, and smooth back-to-top navigation.
- **Aesthetic Excellence**: Built with a sleek cyberpunk dark mode palette, custom SVG branding, responsive glassmorphism, and micro-interactions.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) with `@vitejs/plugin-react-swc`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) + [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **UI Components & Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)

---

## 🚀 How to Run Locally

### Prerequisites
Make sure you have either **pnpm** (recommended) or **npm** installed on your system:
- **Node.js**: v18+ or v20+

### 1. Navigate to the project directory
```powershell
cd "c:\Users\HP845\Desktop\PRIME\yabsra-s-digital-canvas"
```

### 2. Install dependencies
Using **pnpm** (fastest):
```powershell
pnpm install
```
*Or using **npm**:*
```powershell
npm install
```

### 3. Start the development server
```powershell
pnpm dev
# or: npm run dev
```

Once started, open your browser and visit:
👉 **[http://localhost:8080/](http://localhost:8080/)**

---

## 📦 Build for Production

To create an optimized production build:

```powershell
pnpm build
# or: npm run build
```

The output will be bundled into the `dist/` folder ready for deployment.

### Preview Production Build
```powershell
pnpm preview
# or: npm run preview
```

---

## 🌐 Deployment to GitHub Pages

The project is configured with a base path and `gh-pages` script:

```powershell
pnpm deploy
# or: npm run deploy
```

---

## 📂 Project Structure

```
yabsra-s-digital-canvas/
├── public/
│   └── favicon.svg           # Custom branded vector favicon
├── src/
│   ├── assets/               # Profile images and visual assets
│   ├── components/           # UI Components
│   │   ├── Navigation.tsx    # Glassmorphic top navigation & active scroll spy
│   │   ├── Hero.tsx          # Hero section with stats and social links
│   │   ├── About.tsx         # Background, core pillars & engineering principles
│   │   ├── Skills.tsx        # Categorized skill filters & infinite marquee
│   │   ├── Experience.tsx    # Career timeline with live role status
│   │   ├── Projects.tsx      # Project showcase & architecture modal
│   │   ├── Certifications.tsx# Verified licenses & certifications
│   │   ├── Contact.tsx       # Message form, contact cards & footer
│   │   └── ui/               # Reusable UI primitives (dialog, toast, etc.)
│   ├── pages/
│   │   ├── Index.tsx         # Landing page assembly
│   │   └── NotFound.tsx      # Styled 404 error page
│   ├── index.css             # Design tokens, keyframes, scrollbar & utilities
│   ├── App.tsx               # Root app with ThemeProvider, Toaster, and QueryClient
│   └── main.tsx              # React DOM entry point
├── package.json              # Project scripts and dependencies
├── tailwind.config.ts        # Tailwind design configuration
└── vite.config.ts            # Vite build configuration with relative base path
```

---

## 👤 Author

**Yabsra Fekadu**  
- **LinkedIn**: [linkedin.com/in/yabsra-fekadu](https://www.linkedin.com/in/yabsra-fekadu)  
- **GitHub**: [github.com/yabsra28](https://github.com/yabsra28)  
- **Email**: [yabsrafekadu28@gmail.com](mailto:yabsrafekadu28@gmail.com)  
