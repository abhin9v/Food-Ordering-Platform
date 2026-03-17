import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';
import AuthModal from './components/AuthModal/AuthModal';
import CartModal from './components/CartModal/CartModal';
import PaymentModal from './components/PaymentModal/PaymentModal';
import SuccessModal from './components/SuccessModal/SuccessModal';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Code-split pages via lazy loading
const Home        = lazy(() => import('./pages/Home'));
const Restaurants = lazy(() => import('./pages/Restaurants'));
const MenuPage    = lazy(() => import('./pages/MenuPage'));
const About       = lazy(() => import('./pages/About'));
const Contact     = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Navbar />

      {/* Global modals */}
      <AuthModal />
      <CartModal />
      <PaymentModal />
      <SuccessModal />
      <Toast />

      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/"                  element={<Home />} />
          <Route path="/restaurants"       element={<Restaurants />} />
          <Route path="/restaurant/:id"    element={<MenuPage />} />
          <Route path="/about"             element={<About />} />
          <Route path="/contact"           element={<Contact />} />
          <Route path="*"                  element={<Home />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
