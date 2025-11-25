import React, { useState, useEffect } from 'react';
import { 
  Smartphone, Zap, Wind, MessageSquare, 
  Calendar, Users, Flame, BarChart3, Bell, 
  CheckCircle, ArrowRight, Menu, X, Moon, Sun, 
  Mail, Shield, Layout, BrainCircuit, Music, 
  PenTool, Layers, ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import logoSrc from './assets/logo.png'

// --- PHONE SCREEN COMPONENTS (6 SCREENS) --- //

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
      <div className="task-section-title"><Zap size={12}/> Urgent</div>
      <div className="task-item urgent">
        <div className="check"></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="task-section-title"><span style={{color:'#f59e0b'}}>★</span> Important</div>
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
      <div className="bar" style={{height: '40%'}}></div>
      <div className="bar" style={{height: '70%'}}></div>
      <div className="bar" style={{height: '50%'}}></div>
      <div className="bar active" style={{height: '85%'}}></div>
      <div className="bar" style={{height: '30%'}}></div>
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
        <div className="icon-circle success"><CheckCircle size={14}/></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="notify-item">
        <div className="icon-circle info"><Bell size={14}/></div>
        <div className="lines"><span className="line lg"></span><span className="line sm"></span></div>
      </div>
      <div className="notify-item">
        <div className="icon-circle error"><Flame size={14}/></div>
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
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('idle');

  // Defined Explicitly
  const screens = [
    <TimerScreen />, 
    <TaskScreen />, 
    <ChatScreen />, 
    <AnalyticsScreen />, 
    <CalmScreen />, 
    <NotificationScreen />
  ];

  // Auto-rotate screens
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

  const handleWaitlist = (e) => {
    e.preventDefault();
    if(!email) return;
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      setEmail('');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
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

      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="brand">
          <img src={logoSrc} alt="Mora Logo" className="logo-img" />
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#vision" onClick={() => setIsMenuOpen(false)}>Vision</a>
          <a href="#roadmap" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
          <a href="#waitlist" className="nav-cta" onClick={() => setIsMenuOpen(false)}>Join Waitlist</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* --- HERO --- */}
      <header className="hero">
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="badge-pill"><span className="dot"></span> Beta Access Opening Soon</div>
            <h1>Master your <span className="text-gradient">Flow State.</span></h1>
            <p className="hero-sub">
              Mora isn't just a timer. It's an intelligent workspace that combines AI scheduling, urgent task management, and stress relief into one seamless iOS and Android experience.
            </p>
            <form className="waitlist-form" onSubmit={handleWaitlist} id="waitlist">
              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input type="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className="btn-submit" disabled={formStatus === 'loading'}>
                {formStatus === 'success' ? <CheckCircle size={20}/> : <span>Join <ArrowRight size={18}/></span>}
              </button>
            </form>
            <div className="users-preview">
              <div className="avatars"><div className="avatar">A</div><div className="avatar">B</div><div className="avatar">C</div></div>
              <p>Join 2,000+ others waiting</p>
            </div>
          </motion.div>
        </div>

        {/* --- PHONE MOCKUP --- */}
        <div className="hero-phone-wrapper">
          <div className="phone-mockup">
            <div className="notch"></div>
            <div className="side-btn volume-up"></div>
            <div className="side-btn volume-down"></div>
            <div className="side-btn power"></div>
            <div className="screen-container">
              <AnimatePresence mode='wait'>
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
              
              {/* Dynamic Tab Bar Indicator */}
              <div className="tab-bar">
                <div className={`tab-icon ${[1,3,5].includes(activeScreen) ? 'active' : ''}`}><Calendar size={20}/></div>
                <div className={`tab-icon ${[0].includes(activeScreen) ? 'active' : ''}`}><Zap size={20}/></div>
                <div className={`tab-icon ${[2,4].includes(activeScreen) ? 'active' : ''}`}><MessageSquare size={20}/></div>
              </div>
            </div>
          </div>
          {/* Navigation Dots for Carousel */}
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
              <BrainCircuit size={32} className="v-icon"/>
              <h3>Cognitive Load</h3>
              <p>Planning your day takes as much energy as doing the work. Mora's AI handles the scheduling so you can focus on execution.</p>
            </div>
            <div className="vision-card">
              <Flame size={32} className="v-icon"/>
              <h3>Burnout Defense</h3>
              <p>Most timers push you until you break. Mora's "Calm Mode" and energy tracking ensure you rest *before* you crash.</p>
            </div>
            <div className="vision-card">
              <Layout size={32} className="v-icon"/>
              <h3>Context Switching</h3>
              <p>Jumping between Calendar, Todoist, and Headspace kills flow. Mora unifies them into one "Super App."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE DEEP DIVES (Zig-Zag) --- */}
      <section id="features" className="deep-dive">
        
        {/* 1. Intelligent Scheduling */}
        <div className="feature-row">
          <div className="feature-text">
            <div className="icon-box"><BrainCircuit size={24}/></div>
            <h3>Intelligent Scheduling</h3>
            <p>Stop guessing what to do next. Mora's AI analyzes your task list, urgent deadlines, and current energy levels.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16}/> Auto-prioritizes Urgent vs Important</li>
              <li><CheckCircle size={16}/> Adapts to "Low Energy" states</li>
              <li><CheckCircle size={16}/> Suggests breaks automatically</li>
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

        {/* 2. Calm Mode (Separate) */}
        <div className="feature-row reverse">
          <div className="feature-text">
            <div className="icon-box"><Wind size={24}/></div>
            <h3>Calm Mode</h3>
            <p>Anxiety is the enemy of focus. When you feel stuck, switch to Calm Mode for immediate relief.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16}/> Haptic-synced breathing exercises</li>
              <li><CheckCircle size={16}/> Visual cues to lower heart rate</li>
              <li><CheckCircle size={16}/> Integrated directly into the timer</li>
            </ul>
          </div>
          <div className="feature-visual calm-visual">
            <div className="circle-pulse-large"></div>
          </div>
        </div>

        {/* 3. Journaling (Separate) */}
        <div className="feature-row">
          <div className="feature-text">
            <div className="icon-box"><PenTool size={24}/></div>
            <h3>Brain Dump Journaling</h3>
            <p>Clear your mental RAM before a session. Write down distracting thoughts, and let the AI summarize them into actionable tasks later.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16}/> Minimalist writing interface</li>
              <li><CheckCircle size={16}/> Auto-convert thoughts to tasks</li>
              <li><CheckCircle size={16}/> Encrypted and private</li>
            </ul>
          </div>
          <div className="feature-visual journal-visual">
            <div className="journal-card">
              <div className="j-header">Morning Dump</div>
              <div className="j-lines">
                <span className="j-line" style={{width: '90%'}}></span>
                <span className="j-line" style={{width: '95%'}}></span>
                <span className="j-line" style={{width: '60%'}}></span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Analytics */}
        <div className="feature-row reverse" id="analytics">
          <div className="feature-text">
            <div className="icon-box"><BarChart3 size={24}/></div>
            <h3>Data-Driven Growth</h3>
            <p>You can't improve what you don't measure. Get a comprehensive "Productivity Score" based on your habits.</p>
            <ul className="feature-list">
              <li><CheckCircle size={16}/> Weekly Focus Trends</li>
              <li><CheckCircle size={16}/> Heatmap of peak performance hours</li>
              <li><CheckCircle size={16}/> CSV Export for your own records</li>
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

      {/* --- BENTO GRID (Secondary Features) --- */}
      <section className="bento-section">
        <div className="section-head">
          <h2>Everything else you need.</h2>
          <p>No stone left unturned.</p>
        </div>
        <div className="bento-grid">
          <div className="bento-card">
            <Smartphone size={28} className="b-icon"/>
            <h4>Home Widgets</h4>
            <p>View urgent tasks and timer status directly from your iOS/Android home screen.</p>
          </div>
          <div className="bento-card">
            <Calendar size={28} className="b-icon"/>
            <h4>2-Way Sync</h4>
            <p>Import Google Calendar meetings and export your "Deep Work" blocks instantly.</p>
          </div>
          {/* Replaced Focus Buddies with Ambient Sounds */}
          <div className="bento-card">
            <Music size={28} className="b-icon"/>
            <h4>Ambient Soundscapes</h4>
            <p>Lo-fi, White Noise, and Nature sounds built-in to help you zone out distractions.</p>
          </div>
          <div className="bento-card">
            <Shield size={28} className="b-icon"/>
            <h4>Private by Default</h4>
            <p>Your journal entries and chat history are encrypted and local-first.</p>
          </div>
          <div className="bento-card">
            <Flame size={28} className="b-icon"/>
            <h4>Gamification</h4>
            <p>Earn "Zen Master" badges and streaks to keep your dopamine working for you.</p>
          </div>
          <div className="bento-card">
            <Bell size={28} className="b-icon"/>
            <h4>Smart Alerts</h4>
            <p>Notifications that know when to nudge you and when to leave you alone.</p>
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
              <Users size={24} className="r-icon"/>
              <h4>Focus Buddies</h4>
              <p>Live focus rooms to work alongside friends.</p>
            </div>
            <div className="roadmap-item">
              <Layers size={24} className="r-icon"/>
              <h4>Project Stacks</h4>
              <p>Group tasks into sophisticated project hierarchies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <span className="logo">Mora.</span>
            <p>The operating system for your mind.</p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">Vision</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Mora App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;