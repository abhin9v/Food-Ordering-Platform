import React from 'react';
import styles from './About.module.css';

const FEATURES = [
  { icon: '🚀', title: 'Lightning Fast',   desc: 'Code splitting & lazy loading via React.lazy for sub-second load times.' },
  { icon: '🔒', title: 'Secure Payments',  desc: 'Razorpay-powered gateway with real-time transaction security and PCI DSS compliance.' },
  { icon: '📱', title: 'Fully Responsive', desc: 'Seamless experience across all devices — mobile, tablet, and desktop.' },
  { icon: '⚡', title: 'Redux State',       desc: 'Global cart and auth state managed with Redux Toolkit for consistent UX across components.' },
];

const TECH_STACK = [
  { name: 'React 18',       emoji: '⚛️' },
  { name: 'Redux Toolkit',  emoji: '🔴' },
  { name: 'React Router v6',emoji: '🗺️' },
  { name: 'Razorpay',       emoji: '💳' },
  { name: 'CSS Modules',    emoji: '🎨' },
  { name: 'Vercel CI/CD',   emoji: '▲' },
];

const About = () => (
  <main className={styles.page}>
    {/* Hero */}
    <section className={styles.hero}>
      <span className={styles.heroTag}>🍽️ Our Story</span>
      <h1 className={styles.heroTitle}>
        Feeding the <span className={styles.accent}>Nation</span>,{' '}
        One Order at a <span className={styles.accent2}>Time</span>
      </h1>
      <p className={styles.heroSub}>
        FeastFlow was born out of a passion for great food and technology. We connect food
        lovers with the best local restaurants, making every meal an experience.
      </p>
    </section>

    {/* Mission + features */}
    <section className={styles.missionSection}>
      <div className={styles.missionText}>
        <h2 className={styles.missionTitle}>Our Mission</h2>
        <p>
          We believe that great food should be accessible to everyone, everywhere. FeastFlow
          bridges the gap between amazing local restaurants and hungry customers, powered by
          cutting-edge technology.
        </p>
        <p>
          From farm-fresh salads to indulgent biryanis, we curate only the best dining
          experiences. Our platform uses real-time tracking, secure payments via Razorpay,
          and a blazing-fast React frontend to make ordering seamless.
        </p>
        <p>
          Built with React, Redux Toolkit, and deployed on Vercel with CI/CD pipelines,
          FeastFlow delivers not just food — but an experience.
        </p>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>2024</div>
            <div className={styles.statLabel}>Founded</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>20+</div>
            <div className={styles.statLabel}>Cities</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>500+</div>
            <div className={styles.statLabel}>Partners</div>
          </div>
        </div>
      </div>

      <div className={styles.featuresGrid}>
        {FEATURES.map(f => (
          <div key={f.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{f.icon}</div>
            <h4 className={styles.featureTitle}>{f.title}</h4>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Tech stack */}
    <section className={styles.techSection}>
      <h2 className={styles.sectionTitle}>Tech <span className={styles.accent}>Stack</span></h2>
      <div className={styles.techGrid}>
        {TECH_STACK.map(t => (
          <div key={t.name} className={styles.techChip}>
            <span>{t.emoji}</span> {t.name}
          </div>
        ))}
      </div>
    </section>

    {/* Developer */}
    <section className={styles.devSection}>
      <h2 className={styles.sectionTitle}>
        Meet the <span className={styles.accent}>Developer</span>
      </h2>

      <div className={styles.devCard}>
        <div className={styles.devAvatar}>👨‍💻</div>
        <h3 className={styles.devName}>Abhinav Singh</h3>
        <p className={styles.devRole}>Full-Stack Developer</p>
        <p className={styles.devBio}>
          Passionate full-stack developer with expertise in React, Redux, Node.js, and modern
          web technologies. Built FeastFlow to solve real-world food delivery challenges with
          elegant engineering solutions. Loves clean code, great UI, and even better food.
        </p>

        <div className={styles.devLinks}>
          <a href="https://github.com/abhin9v" target="_blank" rel="noreferrer"
            className={styles.devLink}>
            🐙 GitHub
          </a>
          <a href="https://www.linkedin.com/in/abhinav-singh-b1b797213/" target="_blank" rel="noreferrer"
            className={styles.devLink}>
            💼 LinkedIn
          </a>
          <a href="https://leetcode.com/u/abhinavvvvv/" target="_blank" rel="noreferrer"
            className={styles.devLink}>
            ⚡ LeetCode
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default About;
