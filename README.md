# Multi-Theme Switcher App

A React-based web application featuring a dynamic theme switcher with three distinct themes. Built with TypeScript, React Router, and Context API.

## 🌐 Live Demo

**[View Live Application](https://multi-theme-switcher-chi.vercel.app/)**

Experience the theme switcher in action! Try switching between the three different themes and explore the responsive design across different devices.

## 🌟 Features

- **Three Unique Themes**: Minimalist Light, Dark Sidebar, and Colorful Cards
- **Theme Persistence**: Themes persist across page reloads using localStorage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Multi-page Navigation**: Home, About, and Contact pages
- **TypeScript**: Full type safety throughout the application
- **Smooth Animations**: Subtle transitions when switching themes

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multi-theme-switcher-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The build folder will contain the optimized production files ready for deployment.

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header/          # Navigation header with theme switcher
│   └── ProductCard/     # Product display component
├── contexts/            # React Context providers
│   └── ThemeContext.tsx # Theme management context
├── pages/              # Page components
│   ├── Home/           # Homepage with content showcase
│   ├── About/          # Company information page
│   └── Contact/        # Contact form and information
├── styles/             # Global styles and themes
│   ├── global.css      # Base styles and utilities
│   └── themes.css      # Theme-specific CSS variables
├── types/              # TypeScript type definitions
│   └── theme.ts        # Theme and component types
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## 🎨 Theme System

### Theme Architecture
The application uses CSS custom properties (variables) for dynamic theming:

```css
/* Theme 1 - Minimalist */
--primary-color: #2563eb;
--font-family: 'Inter', sans-serif;
--border-radius: 8px;

/* Theme 2 - Dark Sidebar */
--primary-color: #f59e0b;
--font-family: 'Playfair Display', serif;
--border-radius: 12px;

/* Theme 3 - Colorful Cards */
--primary-color: #ec4899;
--font-family: 'Pacifico', cursive;
--border-radius: 20px;
```

### Theme Switching
Themes are managed through React Context and persist using localStorage:

```typescript
const { currentTheme, setTheme } = useTheme();
setTheme('theme2'); // Switch to dark sidebar theme
```

## 📱 Responsive Design

- Adaptive layouts for each theme
- Mobile-optimized navigation
- Touch-friendly interactive elements
- Works on desktop, tablet, and mobile devices
