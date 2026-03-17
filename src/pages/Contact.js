import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../redux/slices/uiSlice';
import styles from './Contact.module.css';

const PROFILES = [
  {
    icon: '🐙',
    label: 'GitHub',
    sub: 'github.com/abhin9v',
    href: 'https://github.com/abhin9v',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    sub: 'Abhinav Singh',
    href: 'https://www.linkedin.com/in/abhinav-singh-b1b797213/',
  },
  {
    icon: '⚡',
    label: 'LeetCode',
    sub: 'abhinavvvvv',
    href: 'https://leetcode.com/u/abhinavvvvv/',
  },
  {
    icon: '📧',
    label: 'Email',
    sub: 'abhinav@feastflow.com',
    href: 'mailto:abhinav@feastflow.com',
  },
  {
    icon: '📍',
    label: 'Location',
    sub: 'India 🇮🇳',
    href: null,
  },
];

const Contact = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      dispatch(showToast({ message: 'Please fill in all fields ⚠️', type: 'error' }));
      return;
    }
    dispatch(showToast({ message: "Message sent! We'll get back to you soon. 📬", type: 'success' }));
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Get in <span className={styles.accent}>Touch</span>
        </h1>
        <p className={styles.sub}>
          Questions, feedback, or partnership inquiries? Reach out to Abhinav!
        </p>
      </div>

      <div className={styles.grid}>
        {/* Developer profiles */}
        <div>
          <h3 className={styles.colTitle}>Developer Profiles</h3>
          <div className={styles.profileList}>
            {PROFILES.map(p =>
              p.href ? (
                <a key={p.label} href={p.href} target={p.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer" className={styles.profileCard}>
                  <div className={styles.profileIcon}>{p.icon}</div>
                  <div>
                    <div className={styles.profileLabel}>{p.label}</div>
                    <div className={styles.profileSub}>{p.sub}</div>
                  </div>
                </a>
              ) : (
                <div key={p.label} className={`${styles.profileCard} ${styles.profileCardStatic}`}>
                  <div className={styles.profileIcon}>{p.icon}</div>
                  <div>
                    <div className={styles.profileLabel}>{p.label}</div>
                    <div className={styles.profileSub}>{p.sub}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact form */}
        <div>
          <h3 className={styles.colTitle}>Send a Message</h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className="form-label">Your Name</label>
              <input className="form-input" name="name" type="text"
                placeholder="John Doe" value={form.name} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className="form-label">Email</label>
              <input className="form-input" name="email" type="email"
                placeholder="john@example.com" value={form.email} onChange={handleChange} />
            </div>
            <div className={styles.field}>
              <label className="form-label">Message</label>
              <textarea className={styles.textarea} name="message"
                placeholder="Your message here…" rows={5}
                value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
