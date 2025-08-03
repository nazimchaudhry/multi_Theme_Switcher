import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext.tsx';
import { fetchProducts } from '../../services/api.ts';
import { Product } from '../../types/theme.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import './Home.css';

const Home: React.FC = () => {
  const { currentTheme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        debugger
        const data = await fetchProducts(8);
        debugger
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const renderSidebar = () => {
    if (currentTheme !== 'theme2') return null;

    return (
      <aside className="sidebar">
        <h3>Navigation</h3>
        <ul className="sidebar-menu">
          <li><a href="#featured">Featured Products</a></li>
          <li><a href="#categories">Categories</a></li>
          <li><a href="#deals">Special Deals</a></li>
          <li><a href="#reviews">Customer Reviews</a></li>
        </ul>
        
        <div className="sidebar-widget">
          <h4>Quick Stats</h4>
          <div className="stat-item">
            <span className="stat-label">Products:</span>
            <span className="stat-value">{products.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Categories:</span>
            <span className="stat-value">{new Set(products.map(p => p.category)).size}</span>
          </div>
        </div>
      </aside>
    );
  };

  const renderContent = () => (
    <div className="content-area">
      <section className="hero-section">
        <h1 className="hero-title">
          {currentTheme === 'theme1' && 'Welcome to Our Store'}
          {currentTheme === 'theme2' && 'Discover Premium Products'}
          {currentTheme === 'theme3' && '🌟 Amazing Products Await! 🌟'}
        </h1>
        <p className="hero-description">
          {currentTheme === 'theme1' && 'Explore our curated collection of high-quality products designed for modern living.'}
          {currentTheme === 'theme2' && 'Experience luxury and sophistication with our carefully selected premium merchandise.'}
          {currentTheme === 'theme3' && 'Dive into a world of colorful, fun, and exciting products that bring joy to your life!'}
        </p>
        <button className="hero-button">
          {currentTheme === 'theme3' ? '🚀 Start Shopping' : 'Shop Now'}
        </button>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              {currentTheme === 'theme3' ? '⚡' : '🚀'}
            </div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              {currentTheme === 'theme3' ? '💎' : '✨'}
            </div>
            <h3>Premium Quality</h3>
            <p>Only the finest products make it to our store</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              {currentTheme === 'theme3' ? '🛡️' : '🔒'}
            </div>
            <h3>Secure Shopping</h3>
            <p>Your data and transactions are always protected</p>
          </div>
        </div>
      </section>

      <section className="products-section" id="featured">
        <h2 className="section-title">Featured Products</h2>
        
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading amazing products...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>⚠️ {error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        )}

        {!loading && !error && (
          <div className={`products-grid ${currentTheme}`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="cta-section">
        <h2>Ready to Start Shopping?</h2>
        <p>Join thousands of satisfied customers who trust our quality and service.</p>
        <div className="cta-buttons">
          <button className="cta-primary">
            {currentTheme === 'theme3' ? '🛍️ Browse All Products' : 'Browse All Products'}
          </button>
          <button className="cta-secondary">Learn More</button>
        </div>
      </section>
    </div>
  );

  return (
    <div className={`home-page ${currentTheme}`}>
      {renderSidebar()}
      {renderContent()}
    </div>
  );
};

export default Home;