import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext.tsx';
import Header from './components/Header/Header.tsx';
import Home from './pages/Home/Home.tsx';
import About from './pages/About/About.tsx';
import Contact from './pages/Contact/Contact.tsx';
import './styles/themes.css';

const App: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <div className={`app ${currentTheme}`} data-theme={currentTheme}>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;