import React, { useState, useEffect } from 'react';
import {
  Smartphone, Zap, Wind, MessageSquare,
  Calendar, Users, Flame, BarChart3, Bell,
  CheckCircle, Menu, X, Moon, Sun,
  Shield, Layout, BrainCircuit, Music,
  PenTool, Layers, Twitter, Instagram, Linkedin, Github, Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import playBadge from './assets/google-play-badge.png';
import './App.css';
import logoSrc from './assets/logo.png';

// --- APP LINK ---
const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.ameen2612.mora.focusflow.app';

// --- CUSTOM ICONS ---
const Tiktok = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const PlayStoreIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M325.3 234.3 104.7 13.7c-7.4-7.4-19.5-7.4-26.9 0-4.1 4.1-6 9.6-5.6 15L256 256 72.2 483.3c-.4 5.4 1.5 10.9 5.6 15 7.4 7.4 19.5 7.4 26.9 0l220.6-220.6Z" fill="currentColor" opacity="0.22"/>
    <path d="M402.7 201.4 325.3 234.3 256 256l69.3 21.7 77.4 32.9c18.8 8 37.3-10.4 29.3-29.3l-29.4-69.9c-4.3-10.2-14.2-16.8-25.3-16.8-3 0-6.1.5-9 1.8Z" fill="currentColor"/>
    <path d="M325.3 277.7 104.7 498.3c-7.4 7.4-19.5 7.4-26.9 0-4.1-4.1-6-9.6-5.6-15L256 256l69.3 21.7Z" fill="currentColor" opacity="0.35"/>
    <path d="M402.7 201.4 325.3 234.3 256 256 72.2 28.7c-.4-5.4 1.5-10.9 5.6-15 7.4-7.4 19.5-7.4 26.9 0l220.6 220.6 77.4-32.9c2.9-1.3 6-1.8 9-1.8 11.1 0 21 6.6 25.3 16.8l-34.3-14.6Z" fill="currentColor" opacity="0.55"/>
  </svg>
);

// --- PHONE SCREEN COMPONENTS --- //
const TimerScreen = () => (
  <div className="screen-content timer-mode">
    <div className="status-pill">Focus Round 1/4</div>
    <div className="timer-ring">
      <div className="timer-inner">
        <h2>25:00</h2>
        <p>STAY FOCUSED</p>
      </div>
    </div>
    <div className="control-btn">
      <div className="btn-icon">II</div>
      <span>PAUSE</span>
    </div>
  </div>
);

const TaskScreen = () => (
  <div className="screen-content task-mode">
    <div className="app-header-text">
      <h3>Today's Plan</h3>
      <small>Let's get to work.</small>
    </div>
    <div className="task-list">
      <div className="task-section-title"><Zap size={12} /> Urgent</div>
      <div className="task-item urgent">
        <div className="check"></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="task-section-title"><span style={{ color: '#f59e0b' }}>★</span> Important</div>
      <div className="task-item">
        <div className="check"></div>
        <div className="lines"><span className="line lg"></span></div>
      </div>
    </div>
  </div>
);

const ChatScreen = () => (
  <div className="screen-content chat-mode">
    <div className="app-header-text">
      <h3>Mora AI</h3>
      <small>Online • Helpful</small>
    </div>
    <div className="chat-bubbles">
      <div className="bubble user">I'm low energy. Plan my day?</div>
      <div className="bubble ai">I've moved your deep work to tomorrow. Let's do 3 small admin tasks now.</div>
    </div>
    <div className="chat-input-mock"></div>
  </div>
);

const AnalyticsScreen = () => (
  <div className="screen-content analytics-mode">
    <div className="app-header-text">
      <h3>Analytics</h3>
    </div>
    <div className="score-card">
      <div className="score-val">85</div>
      <div className="score-label">Productivity Score</div>
    </div>
    <div className="chart-mock">
      <div className="bar" style={{ height: '40%' }}></div>
      <div className="bar" style={{ height: '70%' }}></div>
      <div className="bar" style={{ height: '50%' }}></div>
      <div className="bar active" style={{ height: '85%' }}></div>
      <div className="bar" style={{ height: '30%' }}></div>
    </div>
    <div className="stat-row-mock">
      <div className="stat-mini"><span>4.5h</span><small>Focus</small></div>
      <div className="stat-mini"><span>12</span><small>Tasks</small></div>
    </div>
  </div>
);

const CalmScreen = () => (
  <div className="screen-content calm-mode">
    <div className="app-header-text center">
      <h3>Calm Mode</h3>
    </div>
    <div className="breathe-circle-container">
      <div className="breathe-circle"></div>
      <div className="breathe-text">Breathe In...</div>
    </div>
    <div className="affirmation-card">
      "I release tension."
    </div>
  </div>
);

const NotificationScreen = () => (
  <div className="screen-content notify-mode">
    <div className="app-header-text">
      <h3>Notifications</h3>
    </div>
    <div className="notify-list">
      <div className="notify-item unread">
        <div className="icon-circle success"><CheckCircle size={14} /></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="notify-item">
        <div className="icon-circle info"><Bell size={14} /></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="notify-item">
        <div className="icon-circle error"><Flame size={14} /></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
    </div>
  </div>
);

// --- MAIN APP --- //
function App() {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    <TimerScreen />,
    <TaskScreen />,
    <ChatScreen />,
    <AnalyticsScreen />,
    <CalmScreen />,
    <NotificationScreen />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const systemPref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(systemPref);
    document.documentElement.setAttribute('data-theme', systemPref);
  }, []);

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

      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="brand">
          <img src={logoSrc} alt="Mora Logo" className="logo-img" />
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#vision" onClick={() => setIsMenuOpen(false)}>Vision</a>
          <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
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

      {/* --- HERO --- */}
      <header className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-pill">
              <span className="dot"></span> Now Available on Android
            </div>

            <h1>Master your <span className="text-gradient">Flow State.</span></h1>

            <p className="hero-sub">
              Mora is your intelligent productivity workspace — built to help you plan smarter,
              focus deeper, manage tasks, and reset when stress kicks in.
              Now live on Android.
            </p>

            {/* OFFICIAL PLAYSTORE BADGE */}
            <div className="download-cta-wrap" id="download">
              <a
                href={PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-link"
              >
                <img
                  src={playBadge}
                  alt="Get it on Google Play"
                  className="store-badge"
                />
              </a>
            </div>

            <div className="users-preview">
              <div className="avatars">
                {/* <div className="avatar">A</div>
                <div className="avatar">B</div>
                <div className="avatar">C</div> */}
              </div>
              {/* <p>Helping users focus better every day</p> */}
            </div>
          </motion.div>
        </div>

        {/* --- PHONE MOCKUP CAROUSEL --- */}
        <div className="hero-phone-wrapper">
          <div className="phone-mockup">
            <div className="notch"></div>
            <div className="side-btn volume-up"></div>
            <div className="side-btn volume-down"></div>
            <div className="side-btn power"></div>

            <div className="screen-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreen}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="screen-slide"
                >
                  {screens[activeScreen]}
                </motion.div>
              </AnimatePresence>

              <div className="tab-bar">
                <div className={`tab-icon ${[1, 3, 5].includes(activeScreen) ? 'active' : ''}`}><Calendar size={20} /></div>
                <div className={`tab-icon ${[0, 4].includes(activeScreen) ? 'active' : ''}`}><Zap size={20} /></div>
                <div className={`tab-icon ${[2].includes(activeScreen) ? 'active' : ''}`}><MessageSquare size={20} /></div>
              </div>
            </div>
          </div>

          <div className="carousel-dots">
            {screens.map((_, idx) => (
              <div
                key={idx}
                className={`c-dot ${idx === activeScreen ? 'active' : ''}`}
                onClick={() => setActiveScreen(idx)}
              />
            ))}
          </div>
        </div>
      </header>

      {/* --- VISION SECTION --- */}
      <section id="vision" className="vision-section">
        <div className="vision-content">
          <h2>The <span className="text-blue">Philosophy</span></h2>
          <p className="lead">Productivity apps are broken. They make you feel busy, not productive.</p>
          <div className="vision-grid">
            <div className="vision-card">
              <BrainCircuit size={32} className="v-icon" />
              <h3>Cognitive Load</h3>
              <p>Planning your day takes as much energy as doing the work. Mora's AI handles the scheduling so you can focus on execution.</p>
            </div>
            <div className="vision-card">
              <Flame size={32} className="v-icon" />
              <h3>Burnout Defense</h3>
              <p>Most timers push you until you break. Mora's Calm Mode and energy tracking ensure you rest before you crash.</p>
            </div>
            <div className="vision-card">
              <Layout size={32} className="v-icon" />
              <h3>Context Switching</h3>
              <p>Jumping between multiple apps kills flow. Mora unifies planning, focus, and mental reset into one experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE DEEP DIVES --- */}
      <section id="features" className="deep-dive">
        <div className="feature-row">
          <div className="feature-text">
            <div className="icon-box"><BrainCircuit size={24} /></div>
            <h3>Intelligent Scheduling</h3>
            <p>Stop guessing what to do next. Mora's AI analyzes your task list, urgent deadlines, and current energy levels.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16} /> Auto-prioritizes Urgent vs Important</li>
              <li><CheckCircle size={16} /> Adapts to low-energy moments</li>
              <li><CheckCircle size={16} /> Suggests breaks automatically</li>
            </ul>
          </div>
          <div className="feature-visual ai-visual">
            <div className="chat-interface-mock">
              <div className="chat-msg user">Plan my day, I'm tired.</div>
              <div className="chat-msg ai">
                <div className="ai-head">✨ Suggestion</div>
                <div className="ai-body">
                  <div className="plan-item">1. Clear Email (15m)</div>
                  <div className="plan-item">2. Coffee Break ☕</div>
                  <div className="plan-item">3. Review Designs (30m)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          <div className="feature-text">
            <div className="icon-box"><Wind size={24} /></div>
            <h3>Calm Mode</h3>
            <p>Anxiety is the enemy of focus. When you feel stuck, switch to Calm Mode for immediate relief.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16} /> Haptic-synced breathing exercises</li>
              <li><CheckCircle size={16} /> Visual cues to lower heart rate</li>
              <li><CheckCircle size={16} /> Integrated directly into the timer</li>
            </ul>
          </div>
          <div className="feature-visual calm-visual">
            <div className="circle-pulse-large"></div>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-text">
            <div className="icon-box"><PenTool size={24} /></div>
            <h3>Brain Dump Journaling</h3>
            <p>Clear your mental RAM before a session. Write down distracting thoughts, and let the AI summarize them into actionable tasks later.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16} /> Minimalist writing interface</li>
              <li><CheckCircle size={16} /> Auto-convert thoughts to tasks</li>
              <li><CheckCircle size={16} /> Encrypted and private</li>
            </ul>
          </div>
          <div className="feature-visual journal-visual">
            <div className="journal-card">
              <div className="j-header">Morning Dump</div>
              <div className="j-lines">
                <span className="j-line" style={{ width: '90%' }}></span>
                <span className="j-line" style={{ width: '95%' }}></span>
                <span className="j-line" style={{ width: '60%' }}></span>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-row reverse" id="analytics">
          <div className="feature-text">
            <div className="icon-box"><BarChart3 size={24} /></div>
            <h3>Data-Driven Growth</h3>
            <p>You can't improve what you don't measure. Get a comprehensive productivity score based on your habits.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16} /> Weekly Focus Trends</li>
              <li><CheckCircle size={16} /> Peak performance insights</li>
              <li><CheckCircle size={16} /> Exportable progress data</li>
            </ul>
          </div>
          <div className="feature-visual analytics-visual">
            <div className="graph-container">
              <div className="graph-bar h40"></div>
              <div className="graph-bar h70"></div>
              <div className="graph-bar h50"></div>
              <div className="graph-bar h80 active"></div>
              <div className="graph-bar h60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="bento-section">
        <div className="section-head">
          <h2>Everything else you need.</h2>
          <p>No stone left unturned.</p>
        </div>
        <div className="bento-grid">
          <div className="bento-card">
            <Smartphone size={28} className="b-icon" />
            <h4>Home Widgets</h4>
            <p>View urgent tasks and timer status directly from your Android home screen.</p>
          </div>
          <div className="bento-card">
            <Calendar size={28} className="b-icon" />
            <h4>2-Way Sync</h4>
            <p>Import Google Calendar meetings and export your deep work blocks instantly.</p>
          </div>
          <div className="bento-card">
            <Music size={28} className="b-icon" />
            <h4>Ambient Soundscapes</h4>
            <p>Lo-fi, white noise, and nature sounds built-in to help you zone out distractions.</p>
          </div>
          <div className="bento-card">
            <Shield size={28} className="b-icon" />
            <h4>Private by Default</h4>
            <p>Your journal entries and chat history are encrypted and privacy-first.</p>
          </div>
          <div className="bento-card">
            <Flame size={28} className="b-icon" />
            <h4>Gamification</h4>
            <p>Earn streaks and milestones to keep momentum going.</p>
          </div>
          <div className="bento-card">
            <Bell size={28} className="b-icon" />
            <h4>Smart Alerts</h4>
            <p>Notifications that know when to nudge you and when to stay quiet.</p>
          </div>
        </div>
      </section>

      {/* --- ROADMAP SECTION --- */}
      <section id="roadmap" className="roadmap-section">
        <div className="roadmap-content">
          <div className="roadmap-header">
            <h2>Coming Soon</h2>
            <p>We are just getting started.</p>
          </div>
          <div className="roadmap-grid">
            <div className="roadmap-item">
              <Users size={24} className="r-icon" />
              <h4>Focus Buddies</h4>
              <p>Live focus rooms to work alongside friends.</p>
            </div>
            <div className="roadmap-item">
              <Layers size={24} className="r-icon" />
              <h4>Project Stacks</h4>
              <p>Group tasks into sophisticated project hierarchies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="site-footer">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>

        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src={logoSrc} alt="Mora Logo" className="footer-logo" />
              {/* <span className="footer-brand-name">Mora</span> */}
            </div>

            <p className="footer-desc">
              The operating system built for your mind.
            </p>

            {/* <div className="footer-socials">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="TikTok"><Tiktok size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
            </div> */}
          </div>

          {/* Product Links */}
          <div className="footer-links-grid single-column">
            <div className="f-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#vision">Why Mora</a>
              <a href="#roadmap">Roadmap</a>
              {/* <a href="/privacy-policy">Privacy Policy</a> */}
              <a href={PLAYSTORE_URL} target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>

          {/* Download Column */}
          <div className="footer-download-col">
            <div className="download-card">
              <div className="download-badge-row">
                <span className="live-dot"></span>
                <span className="download-status">Now available on Android</span>
              </div>

              <h4>Download Mora</h4>
              <p>
                Start focusing smarter, planning better, and staying consistent with Mora.
              </p>

              <a
                href={PLAYSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="store-badge-link footer-badge-link"
              >
                <img
                  src={playBadge}
                  alt="Get it on Google Play"
                  className="store-badge footer-store-badge"
                />
              </a>

              <div className="footer-mini-note">
                Free to download
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mora App. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            {/* <a href="#">Terms</a> */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;