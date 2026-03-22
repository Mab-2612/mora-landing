import React from 'react';
import {
  Shield,
  Database,
  Activity,
  Cpu,
  Lock,
  Trash2,
  User,
  AlertTriangle,
  Mail,
} from 'lucide-react';
import './privacy-policy.css';

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-bg-glow glow-1"></div>
      <div className="policy-bg-glow glow-2"></div>

      <main className="policy-shell">
        {/* HERO */}
        <section className="policy-hero">
          <div className="policy-icon">
            <Shield size={24} />
          </div>

          <h1>Privacy Policy</h1>
          <p className="policy-subtext">
            Your privacy matters. This explains how Mora collects, uses, and protects your data.
          </p>

          <div className="policy-meta">
            Last updated: March 2026
          </div>
        </section>

        {/* CONTENT */}
        <section className="policy-content">

          {/* 1 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Database size={18} />
              <h2>Information We Collect</h2>
            </div>

            <h4>Personal Information</h4>
            <ul>
              <li>Email address</li>
            </ul>

            <h4>App Activity</h4>
            <ul>
              <li>Tasks and schedules</li>
              <li>Journal entries and brain dumps</li>
              <li>AI interactions</li>
              <li>Feature usage</li>
            </ul>

            <h4>Device & Technical Data</h4>
            <ul>
              <li>Device identifiers</li>
              <li>IP address</li>
              <li>App performance and crash data</li>
              <li>Diagnostic information</li>
            </ul>
          </div>

          {/* 2 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Activity size={18} />
              <h2>How We Use Your Information</h2>
            </div>

            <ul>
              <li>Provide and maintain Mora’s core features</li>
              <li>Manage your account</li>
              <li>Improve app performance and user experience</li>
              <li>Analyze usage trends</li>
              <li>Ensure app security</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Cpu size={18} />
              <h2>Data Sharing</h2>
            </div>

            <p>
              We do not sell your personal data.
            </p>

            <p>
              We may share data only with trusted service providers (such as backend
              infrastructure and analytics tools) strictly to operate and improve the app.
            </p>
          </div>

          {/* 4 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Lock size={18} />
              <h2>Data Security</h2>
            </div>

            <ul>
              <li>All data is transmitted securely using encryption (HTTPS)</li>
              <li>We take reasonable measures to protect your information</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="policy-card highlight">
            <div className="policy-card-head">
              <Trash2 size={18} />
              <h2>Data Retention & Deletion</h2>
            </div>

            <p>
              You can request deletion of your account and all associated data at any time.
            </p>

            <div className="policy-actions">
              <a href="/delete-account" className="policy-btn">
                Request Deletion
              </a>

              <a href="mailto:support@moraai.app" className="policy-link">
                <Mail size={16} />
                support@moraai.app
              </a>
            </div>

            <p className="policy-note">
              Requests are processed within 7 days.
            </p>
          </div>

          {/* 6 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <User size={18} />
              <h2>Your Rights</h2>
            </div>

            <ul>
              <li>Access your data</li>
              <li>Update your information</li>
              <li>Request deletion</li>
            </ul>
          </div>

          {/* 7 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <AlertTriangle size={18} />
              <h2>Children’s Privacy</h2>
            </div>

            <p>
              Mora is not intended for users under 8 years of age.
            </p>
          </div>

          {/* 8 */}
          <div className="policy-card">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. Changes will be posted on this page.
            </p>
          </div>

          {/* 9 */}
          <div className="policy-card">
            <h2>Contact Us</h2>

            <a href="mailto:support@moraai.app" className="policy-link">
              <Mail size={16} />
              support@moraai.app
            </a>
          </div>

        </section>
      </main>
    </div>
  );
}