import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../../redux/slices/authSlice';
import { selectModals, openModal, closeModal } from '../../redux/slices/uiSlice';
import { showToast } from '../../redux/slices/uiSlice';
import styles from './AuthModal.module.css';

/* ── Login Form ── */
const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail]   = useState('');
  const [pass,  setPass]    = useState('');

  const handleSubmit = () => {
    if (!email.trim() || !pass) {
      dispatch(showToast({ message: 'Please fill in all fields ⚠️', type: 'error' }));
      return;
    }
    const name = email.split('@')[0];
    dispatch(login({ name, email }));
    dispatch(closeModal('login'));
    dispatch(showToast({ message: `Welcome back, ${name}! 👋`, type: 'success' }));
  };

  return (
    <>
      <h2 className={styles.title}>Welcome Back!</h2>
      <p className={styles.sub}>Sign in to your FeastFlow account</p>

      <div className={styles.field}>
        <label className="form-label">Email</label>
        <input className="form-input" type="email" placeholder="your@email.com"
          value={email} onChange={e => setEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
      </div>
      <div className={styles.field}>
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="••••••••"
          value={pass} onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
      </div>

      <button className={styles.submit} onClick={handleSubmit}>Sign In →</button>
      <div className={styles.divider}><span>or</span></div>
      <p className={styles.switch}>
        No account?{' '}
        <span onClick={() => dispatch(openModal('signup'))}>Sign Up Free</span>
      </p>
    </>
  );
};

/* ── Signup Form ── */
const SignupForm = () => {
  const dispatch = useDispatch();
  const [name,  setName]  = useState('');
  const [email, setEmail] = useState('');
  const [pass,  setPass]  = useState('');

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !pass) {
      dispatch(showToast({ message: 'Please fill in all fields ⚠️', type: 'error' }));
      return;
    }
    if (pass.length < 8) {
      dispatch(showToast({ message: 'Password must be at least 8 characters', type: 'error' }));
      return;
    }
    dispatch(signup({ name, email }));
    dispatch(closeModal('signup'));
    dispatch(showToast({ message: `Welcome to FeastFlow, ${name}! 🎉`, type: 'success' }));
  };

  return (
    <>
      <h2 className={styles.title}>Join FeastFlow</h2>
      <p className={styles.sub}>Create your account and start ordering</p>

      <div className={styles.field}>
        <label className="form-label">Full Name</label>
        <input className="form-input" type="text" placeholder="Your full name"
          value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className="form-label">Email</label>
        <input className="form-input" type="email" placeholder="your@email.com"
          value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className={styles.field}>
        <label className="form-label">Password</label>
        <input className="form-input" type="password" placeholder="Min 8 characters"
          value={pass} onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
      </div>

      <button className={styles.submit} onClick={handleSubmit}>Create Account →</button>
      <p className={styles.switch}>
        Have an account?{' '}
        <span onClick={() => dispatch(openModal('login'))}>Sign In</span>
      </p>
    </>
  );
};

/* ── Modal wrapper ── */
const AuthModal = () => {
  const dispatch = useDispatch();
  const modals   = useSelector(selectModals);

  const isLoginOpen  = modals.login;
  const isSignupOpen = modals.signup;
  const isOpen = isLoginOpen || isSignupOpen;

  if (!isOpen) return null;

  const which = isLoginOpen ? 'login' : 'signup';

  return (
    <div className={`${styles.overlay} ${styles.open}`}
      onClick={e => e.target === e.currentTarget && dispatch(closeModal(which))}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => dispatch(closeModal(which))}>✕</button>
        {isLoginOpen  && <LoginForm />}
        {isSignupOpen && <SignupForm />}
      </div>
    </div>
  );
};

export default AuthModal;
