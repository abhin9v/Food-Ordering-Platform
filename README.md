# 🍽️ FeastFlow — Food Ordering Web Application

A full-stack-style food ordering platform built with **React 18**, **Redux Toolkit**, **React Router v6**, and **Razorpay Payment Gateway**. Deployed on **Vercel** with CI/CD pipelines.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🏠 Restaurant Listing | Browse 8 restaurants with search & category filters |
| 🍽️ Full Menus | Per-restaurant menu pages with categories and items |
| 🛒 Cart Management | Add / remove / delete items with live totals (subtotal, GST, delivery) |
| 🔐 Authentication | Login & Signup modals with form validation |
| 💳 Razorpay Payments | UPI, Card, Net Banking, COD — PCI DSS Level 1 |
| 📦 Redux State | Global cart + auth state via Redux Toolkit slices |
| ⚡ Code Splitting | `React.lazy` + `Suspense` for lazy-loaded pages |
| 📱 Responsive UI | Mobile-first CSS Modules design |
| 🚀 Vercel CI/CD | Auto-deploy on every push to `main` |

---

## 🗂️ Project Structure

```
feastflow/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── RestaurantCard/
│   │   ├── RestaurantGrid/
│   │   ├── CartPanel/          ← sticky side panel on menu page
│   │   ├── AuthModal/          ← login + signup
│   │   ├── CartModal/          ← cart overview popup
│   │   ├── PaymentModal/       ← Razorpay payment flow
│   │   ├── SuccessModal/       ← order confirmed screen
│   │   ├── Toast/              ← notification toasts
│   │   └── LoadingSpinner/     ← Suspense fallback
│   ├── data/
│   │   ├── restaurants.js      ← 8 restaurants + categories
│   │   └── menus.js            ← full menu per restaurant
│   ├── hooks/
│   │   ├── useToast.js         ← dispatch toasts easily
│   │   └── useFilteredRestaurants.js
│   ├── pages/
│   │   ├── Home.js             ← hero + top restaurants
│   │   ├── Restaurants.js      ← full listing with filters
│   │   ├── MenuPage.js         ← per-restaurant menu + cart
│   │   ├── About.js            ← story + developer profile
│   │   └── Contact.js          ← developer profiles + form
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       ├── cartSlice.js    ← items, qty, totals
│   │       ├── authSlice.js    ← user login/signup/logout
│   │       ├── uiSlice.js      ← modals, toasts, orderId
│   │       └── filterSlice.js  ← category + search query
│   ├── utils/
│   │   ├── razorpay.js         ← Razorpay SDK loader + checkout helper
│   │   └── formatCurrency.js   ← formatINR(amount)
│   ├── App.js                  ← router + lazy pages + global modals
│   └── index.js                ← ReactDOM + Redux Provider
├── .env.example
├── .gitignore
├── vercel.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/abhin9v/feastflow.git
cd feastflow

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your Razorpay test key

# 4. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💳 Razorpay Setup

1. Create an account at [https://dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Go to **Settings → API Keys** and generate a **Test Key**
3. Copy the **Key ID** into `.env.local`:
   ```
   REACT_APP_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXXXXXX
   ```
4. For production payments, generate a **Live Key** and update accordingly.

> In the current demo, the UPI/Card/NetBanking flow opens a real Razorpay checkout (test mode). COD simulates a 1.2s server response.

---

## ▲ Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables on Vercel dashboard:
# REACT_APP_RAZORPAY_KEY_ID = rzp_live_XXXXXXXXXXXXXX
```

`vercel.json` already handles SPA routing so all React Router paths work correctly in production.

### CI/CD Pipeline
Connect the GitHub repo to Vercel → every push to `main` triggers an automatic production build.

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3 | UI library |
| Redux Toolkit | 2.2 | Global state (cart, auth, UI, filters) |
| React Router | 6.23 | Client-side routing |
| CSS Modules | — | Scoped component styles |
| Razorpay | v1 | Payment gateway |
| Vercel | — | Hosting + CI/CD |

---

## 👨‍💻 Developer

**Abhinav Singh**

- 🐙 GitHub: [github.com/abhin9v](https://github.com/abhin9v)
- 💼 LinkedIn: [linkedin.com/in/abhinav-singh-b1b797213](https://www.linkedin.com/in/abhinav-singh-b1b797213/)
- ⚡ LeetCode: [leetcode.com/u/abhinavvvvv](https://leetcode.com/u/abhinavvvvv/)

---

## 📄 License

MIT
