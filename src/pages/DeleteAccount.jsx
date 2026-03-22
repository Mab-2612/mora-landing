import React, { useMemo, useState } from 'react';
import {
  Shield,
  Trash2,
  Lock,
  Mail,
  CheckCircle2,
  AlertTriangle,
  Copy,
  ExternalLink,
} from 'lucide-react';
import './delete-account.css';

const SUPPORT_EMAIL = 'support@moraai.app';
const SUBJECT = 'Delete my account';
const BODY_TEMPLATE = `Hello Mora Support,

I would like to request permanent deletion of my account.

My account email is: 

Please delete all associated data linked to this account.

Thank you.`;

export default function DeleteAccount() {
  const [copied, setCopied] = useState(false);

  const gmailComposeUrl = useMemo(() => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      SUPPORT_EMAIL
    )}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY_TEMPLATE)}`;
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="delete-page">
      <div className="delete-bg-glow glow-1"></div>
      <div className="delete-bg-glow glow-2"></div>

      <main className="delete-shell">
        {/* HERO */}
        <section className="delete-hero">
          <div className="delete-hero-icon">
            <Trash2 size={24} />
          </div>

          <h1>Delete Your Mora Account</h1>
          <p className="delete-subtext">
            You’re in control of your data. Request permanent deletion anytime.
          </p>

          <div className="delete-trust-line">
            <AlertTriangle size={16} />
            <span>This action is irreversible.</span>
          </div>
        </section>

        {/* WHAT HAPPENS */}
        <section className="delete-grid">
          <div className="delete-card">
            <div className="delete-card-head">
              <CheckCircle2 size={18} />
              <h2>What gets deleted</h2>
            </div>

            <ul className="delete-list">
              <li>Your account profile</li>
              <li>Tasks and schedules</li>
              <li>Journal entries</li>
              <li>Brain dumps</li>
              <li>AI conversations</li>
              <li>All associated app data</li>
            </ul>
          </div>

          <div className="delete-card">
            <div className="delete-card-head">
              <Shield size={18} />
              <h2>What may be retained</h2>
            </div>

            <ul className="delete-list">
              <li>Legal compliance data</li>
              <li>Fraud prevention logs</li>
              <li>Security-related records</li>
            </ul>

            <p className="delete-note">
              We only retain limited records where required for security, abuse
              prevention, or legal compliance.
            </p>
          </div>
        </section>

        {/* REQUEST SECTION */}
        <section className="delete-request">
          <div className="delete-card large premium-method">
            <div className="delete-card-head">
              <Lock size={18} />
              <h2>Request account deletion</h2>
            </div>

            <p className="delete-copy">
              Send a deletion request using the email attached to your Mora account.
            </p>

            <div className="delete-mini-box">
              <strong>Include:</strong>
              <ul>
                <li>Your account email</li>
                <li>Subject: Delete my account</li>
              </ul>
            </div>

            {/* ACTION BUTTONS */}
            <div className="support-actions">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gmail-btn"
              >
                <Mail size={18} />
                <span>Open in Gmail</span>
                <ExternalLink size={16} />
              </a>

              <button
                type="button"
                className={`copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
              >
                <Copy size={16} />
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>

            <p className="support-helper-text">
              Gmail opens with the email, subject, and request message already filled in.
            </p>
          </div>
        </section>

        {/* BOTTOM */}
        <section className="delete-bottom-grid">
          <div className="delete-card">
            <h2>Processing time</h2>
            <p>
              Requests are typically processed within <strong>7 days</strong>.
            </p>
          </div>

          <div className="delete-card">
            <h2>Final reassurance</h2>
            <p>
              Once processed, your data will be permanently deleted and cannot be
              recovered.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}