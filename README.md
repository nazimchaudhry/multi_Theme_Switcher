# Multi-Theme Switcher App

A professional React-based web application featuring a dynamic theme switcher with three distinct themes. Built with TypeScript, React Router, and Context API for optimal performance and user experience.

## 🌟 Features

### Theme System
- **Theme 1 (Minimalist Light)**: Clean, modern design with light background and Inter font
- **Theme 2 (Dark Sidebar)**: Professional dark mode with sidebar layout and Playfair Display serif font
- **Theme 3 (Colorful Cards)**: Vibrant, playful design with card-based grid layout and Pacifico font

### Core Functionality
- ✅ **Theme Persistence**: Themes persist across page reloads using localStorage
- ✅ **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- ✅ **Smooth Animations**: Subtle transitions when switching themes
- ✅ **Multi-page Navigation**: Home, About, and Contact pages with React Router
- ✅ **API Integration**: Fetches product data from FakeStore API
- ✅ **Security Features**: Input validation, XSS protection, and secure API calls
- ✅ **TypeScript**: Full type safety throughout the application
- ✅ **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### Design Highlights
- **Fixed Header**: Persistent navigation with theme dropdown
- **Dynamic Layouts**: Each theme has unique structure and spacing
- **Professional UI**: Clean interfaces suitable for business applications
- **Loading States**: Elegant loading animations and error handling
- **Interactive Elements**: Hover effects, form validation, and smooth transitions

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
│   ├── Home/           # Homepage with product showcase
│   ├── About/          # Company information page
│   └── Contact/        # Contact form and information
├── services/           # API and external services
│   └── api.ts          # FakeStore API integration
├── styles/             # Global styles and themes
│   ├── global.css      # Base styles and utilities
│   └── themes.css      # Theme-specific CSS variables
├── types/              # TypeScript type definitions
│   └── theme.ts        # Theme and API types
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

## 🔧 API Integration

### FakeStore API
The application integrates with the FakeStore API for product data:

- **Endpoint**: `https://fakestoreapi.com/products`
- **Security**: Input validation and XSS protection
- **Error Handling**: Graceful fallbacks and user feedback
- **Loading States**: Smooth loading animations

### Security Features
- Input sanitization for all API responses
- XSS protection through proper escaping
- CSRF protection with secure headers
- Content validation and type checking

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

### Responsive Features
- Adaptive layouts for each theme
- Mobile-optimized navigation
- Touch-friendly interactive elements
- Optimized images and content

## 🛡️ Security Measures

### Input Validation
- Form input sanitization
- API response validation
- Type checking with TypeScript
- XSS prevention

### Secure Practices
- No inline scripts or styles
- Secure API calls with proper headers
- Content Security Policy ready
- HTTPS-ready configuration

## 🎯 Performance Optimizations

### Code Splitting
- Lazy loading for route components
- Dynamic imports for heavy dependencies
- Optimized bundle sizes

### Image Optimization
- Lazy loading for product images
- Fallback images for failed loads
- Responsive image sizing

### Caching Strategy
- Theme preferences in localStorage
- API response caching
- Static asset optimization

## 🧪 Testing

### Running Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
- Component rendering tests
- Theme switching functionality
- API integration tests
- Form validation tests

## 🚀 Deployment

### Deployment Options

1. **Netlify**
   ```bash
   npm run build
   # Deploy the build folder to Netlify
   ```

2. **Vercel**
   ```bash
   npm run build
   # Deploy using Vercel CLI or GitHub integration
   ```

3. **Traditional Hosting**
   ```bash
   npm run build
   # Upload build folder contents to your web server
   ```

### Environment Variables
Create a `.env` file for environment-specific configurations:

```env
REACT_APP_API_BASE_URL=https://fakestoreapi.com
REACT_APP_VERSION=1.0.0
```

## 🤝 Contributing

### Development Guidelines
1. Follow TypeScript best practices
2. Maintain responsive design principles
3. Ensure accessibility compliance
4. Write comprehensive tests
5. Document new features

### Code Style
- Use TypeScript for all new code
- Follow React functional component patterns
- Implement proper error boundaries
- Maintain consistent naming conventions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **FakeStore API** for providing test data
- **Google Fonts** for typography options
- **React Team** for the excellent framework
- **TypeScript Team** for type safety

## 📞 Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation wiki

---

**Built with ❤️ using React, TypeScript, and modern web technologies**