import React from 'react';
import {
  Shield,
  FileText,
  User,
  Cpu,
  CreditCard,
  Lock,
  Trash2,
  Users,
  AlertTriangle,
  Mail,
  Ban,
  Globe,
} from 'lucide-react';
import './privacy-policy.css';

export default function TermsOfService() {
  return (
    <div className="policy-page">
      <div className="policy-bg-glow glow-1"></div>
      <div className="policy-bg-glow glow-2"></div>

      <main className="policy-shell">
        {/* HERO */}
        <section className="policy-hero">
          <div className="policy-icon">
            <FileText size={24} />
          </div>
          <h1>Terms of Service</h1>
          <p className="policy-subtext">
            By using Mora, you agree to these terms. Please read them carefully.
          </p>
          <div className="policy-meta">Last updated: June 2026</div>
        </section>

        {/* CONTENT */}
        <section className="policy-content">

          {/* 1 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Shield size={18} />
              <h2>Agreement to Terms</h2>
            </div>
            <p>
              By downloading, accessing, or using Mora ("the Service"), you confirm that you have
              read, understood, and agree to be bound by these Terms of Service. If you do not
              agree, you must stop using the Service immediately.
            </p>
          </div>

          {/* 2 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <User size={18} />
              <h2>Eligibility & Age Requirements</h2>
            </div>
            <p>
              You must be at least <strong>8 years old</strong> to use Mora. If you are under 18,
              you may only use the Service with the consent and supervision of a parent or legal
              guardian, who accepts full responsibility for your use of the Service.
            </p>
          </div>

          {/* 3 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <User size={18} />
              <h2>Your Account</h2>
            </div>
            <ul>
              <li>Provide accurate and complete registration information</li>
              <li>Keep your login credentials confidential</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>You are responsible for all activity under your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate your account at any time for
              conduct that violates these Terms or is harmful to other users or the Service.
            </p>
          </div>

          {/* 4 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <AlertTriangle size={18} />
              <h2>Wellness Disclaimer</h2>
            </div>
            <p>
              Mora is a productivity and focus tool — it is <strong>not</strong> a substitute
              for professional mental health advice, therapy, or medical treatment.
            </p>
            <ul>
              <li>Journaling, AI chat, and brain dump features are personal productivity tools only</li>
              <li>Do not rely on Mora for medical or psychological decisions</li>
              <li>If you are in a mental health crisis, please contact a qualified professional</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Cpu size={18} />
              <h2>AI-Powered Features</h2>
            </div>
            <p>
              Mora includes AI features such as task breakdown, daily planning, journaling
              assistance, and chat. By using them:
            </p>
            <ul>
              <li>AI responses are automated and may be inaccurate or incomplete</li>
              <li>Do not rely solely on AI output for important decisions</li>
              <li>We may use anonymized usage data to improve AI features</li>
            </ul>
          </div>

          {/* 6 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <FileText size={18} />
              <h2>Your Content</h2>
            </div>
            <p>
              You retain ownership of content you create in Mora (journal entries, tasks, notes,
              etc.). By submitting content, you grant us a limited license to store and process
              it solely to operate and improve the Service.
            </p>
            <p>
              We will <strong>not</strong> sell your personal content to third parties. Any use
              for AI improvement is done with anonymized or aggregated data only.
            </p>
            <p>You agree not to submit content that is unlawful, harmful, or offensive.</p>
          </div>

          {/* 7 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Users size={18} />
              <h2>Social & Shared Sessions</h2>
            </div>
            <p>
              Mora includes social features such as friends, shared focus sessions, presence
              indicators, and in-session messaging. You agree to:
            </p>
            <ul>
              <li>Treat other users with respect</li>
              <li>Not harass or send harmful messages to other users</li>
              <li>Not misuse shared sessions to disrupt others' focus</li>
              <li>Not create fake accounts to manipulate leaderboards</li>
            </ul>
          </div>

          {/* 8 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Ban size={18} />
              <h2>Prohibited Uses</h2>
            </div>
            <ul>
              <li>Uploading violent, explicit, or unlawful content</li>
              <li>Reverse engineering or decompiling the Service</li>
              <li>Using the Service for competitive intelligence without written consent</li>
              <li>Circumventing security protections or gaining unauthorized access</li>
              <li>Using bots or automated scripts to interact with the Service</li>
              <li>Interfering with the Service's servers or infrastructure</li>
            </ul>
          </div>

          {/* 9 */}
          <div className="policy-card highlight">
            <div className="policy-card-head">
              <CreditCard size={18} />
              <h2>Subscriptions & Billing</h2>
            </div>
            <p>
              Mora Pro subscriptions are processed through the Apple App Store and Google Play
              Store via RevenueCat. Their terms govern payment processing, renewals, and refunds.
            </p>
            <ul>
              <li>Subscriptions are billed in advance on a recurring or lifetime basis</li>
              <li>Auto-renews unless cancelled at least 24 hours before the period ends</li>
              <li>Fees are non-refundable except as required by applicable law</li>
              <li>Manage or cancel via your App Store or Google Play subscription settings</li>
            </ul>
          </div>

          {/* 10 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Lock size={18} />
              <h2>Intellectual Property</h2>
            </div>
            <p>
              All rights in the Service — including the Mora name, logo, design, code, and AI
              systems — are owned exclusively by the Company or its licensors. You may not copy,
              modify, distribute, sell, or reverse engineer any part of the Service without prior
              written permission.
            </p>
          </div>

          {/* 11 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Trash2 size={18} />
              <h2>Termination</h2>
            </div>
            <p>
              We may suspend or terminate your access at any time if you violate these Terms.
              Upon termination, all licenses granted to you immediately cease.
            </p>
          </div>

          {/* 12 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <AlertTriangle size={18} />
              <h2>Disclaimer of Warranties</h2>
            </div>
            <p>
              The Service is provided on an <strong>"AS IS"</strong> and{' '}
              <strong>"AS AVAILABLE"</strong> basis without warranties of any kind. We disclaim
              all warranties including merchantability, fitness for a particular purpose, accuracy
              of AI outputs, and non-infringement.
            </p>
          </div>

          {/* 13 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Shield size={18} />
              <h2>Limitation of Liability</h2>
            </div>
            <p>
              To the maximum extent permitted by law, our total liability shall not exceed the
              greater of the amount you paid in the preceding 12 months or USD $100. We are not
              liable for indirect, incidental, or consequential damages, including loss of data or
              productivity.
            </p>
          </div>

          {/* 14 */}
          <div className="policy-card">
            <div className="policy-card-head">
              <Globe size={18} />
              <h2>Governing Law</h2>
            </div>
            <p>
              These Terms are governed by applicable law. Any disputes shall be subject to the
              exclusive jurisdiction of the courts in the Company's place of establishment, except
              where mandatory local law provides otherwise.
            </p>
          </div>

          {/* 15 */}
          <div className="policy-card">
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms at any time. Material changes will be announced through
              the app or via email. Continued use after changes take effect constitutes acceptance.
            </p>
          </div>

          {/* 16 */}
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