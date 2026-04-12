import { foodPhoto } from './foodPhotoUrls';

export const CATEGORIES = [
  { id: 'all',      label: 'All',       image: foodPhoto('photo-1504674900247-0877df9cc836', 72, 72) },
  { id: 'pizza',    label: 'Pizza',     image: foodPhoto('photo-1513104890138-7c749659a591', 72, 72) },
  { id: 'burger',   label: 'Burgers',   image: foodPhoto('photo-1568901346375-23c9450c58cd', 72, 72) },
  { id: 'biryani',  label: 'Biryani',   image: foodPhoto('photo-1589302168068-964664d93dc0', 72, 72) },
  { id: 'chinese',  label: 'Chinese',   image: foodPhoto('photo-1612929633738-8fe44f7ec841', 72, 72) },
  { id: 'desserts', label: 'Desserts',  image: foodPhoto('photo-1578985545062-69928b1d9587', 72, 72) },
  { id: 'sushi',    label: 'Sushi',     image: foodPhoto('photo-1579584425555-c3ce17fd4351', 72, 72) },
  { id: 'healthy',  label: 'Healthy',   image: foodPhoto('photo-1546069901-ba9599a7e63c', 72, 72) },
];

const restaurants = [
  { id: 1, name: 'Spicy Palace',   image: foodPhoto('photo-1513104890138-7c749659a591', 800, 480), rating: 4.8, cuisine: 'Pizza, Italian',    tags: ['pizza'],    time: '25–35', minOrder: 199, badge: 'BESTSELLER', badgeVeg: false },
  { id: 2, name: 'Burger Bros',    image: foodPhoto('photo-1568901346375-23c9450c58cd', 800, 480), rating: 4.6, cuisine: 'Burgers, American', tags: ['burger'],   time: '20–30', minOrder: 149, badge: 'NEW',        badgeVeg: false },
  { id: 3, name: 'Biryani House',  image: foodPhoto('photo-1589302168068-964664d93dc0', 800, 480), rating: 4.9, cuisine: 'Biryani, Mughlai',  tags: ['biryani'],  time: '35–45', minOrder: 249, badge: 'TOP RATED',  badgeVeg: false },
  { id: 4, name: 'Wok & Roll',     image: foodPhoto('photo-1612929633738-8fe44f7ec841', 800, 480), rating: 4.5, cuisine: 'Chinese, Thai',     tags: ['chinese'],  time: '25–35', minOrder: 199, badge: 'VEG',        badgeVeg: true  },
  { id: 5, name: 'Sweet Dreams',   image: foodPhoto('photo-1578985545062-69928b1d9587', 800, 480), rating: 4.7, cuisine: 'Desserts, Bakery',  tags: ['desserts'], time: '15–25', minOrder: 99,  badge: 'TRENDING',   badgeVeg: false },
  { id: 6, name: 'Sakura Sushi',   image: foodPhoto('photo-1579584425555-c3ce17fd4351', 800, 480), rating: 4.8, cuisine: 'Japanese, Sushi',   tags: ['sushi'],    time: '30–40', minOrder: 299, badge: 'PREMIUM',    badgeVeg: false },
  { id: 7, name: 'Green Bowl',     image: foodPhoto('photo-1546069901-ba9599a7e63c', 800, 480), rating: 4.4, cuisine: 'Healthy, Salads',   tags: ['healthy'],  time: '20–30', minOrder: 179, badge: 'VEG',        badgeVeg: true  },
  { id: 8, name: 'The Curry Co.',  image: foodPhoto('photo-1585937421612-70a008356fbe', 800, 480), rating: 4.6, cuisine: 'Indian, Curry',     tags: ['biryani'],  time: '30–40', minOrder: 229, badge: 'POPULAR',    badgeVeg: false },
];

export default restaurants;
