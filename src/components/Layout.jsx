import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import playBadge from '../assets/google-play-badge.png';
import logoSrc from '../assets/logo.png';
import '../App.css';

const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.ameen2612.mora.focusflow.app';

export default function Layout() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const systemPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(systemPref);
    document.documentElement.setAttribute('data-theme', systemPref);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="app">
      <div className="glow-bg top-left"></div>
      <div className="glow-bg bottom-right"></div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <a href="/"><img src={logoSrc} alt="Mora Logo" className="logo-img" /></a>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="/#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="/#vision" onClick={() => setIsMenuOpen(false)}>Vision</a>
          <a href="/#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
          <a
            href={PLAYSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Download App
          </a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <Outlet />

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>

        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={logoSrc} alt="Mora Logo" className="footer-logo" />
            </div>
            <p className="footer-desc">The operating system built for your mind.</p>
          </div>

          <div className="footer-links-grid single-column">
            <div className="f-col">
              <h4>Product</h4>
              <a href="/#features">Features</a>
              <a href="/#vision">Why Mora</a>
              <a href="/#roadmap">Roadmap</a>
              <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>

          <div className="footer-download-col">
            <div className="download-card">
              <h4>Download Mora</h4>
              <p>Start focusing smarter, planning better, and staying consistent with Mora.</p>
              <a
                href={PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-link footer-badge-link"
              >
                <img src={playBadge} alt="Get it on Google Play" className="store-badge footer-store-badge" />
              </a>
              <div className="footer-mini-note">Free to download</div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mora App. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}