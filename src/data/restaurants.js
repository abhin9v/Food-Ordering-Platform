export const CATEGORIES = [
  { id: 'all',      label: 'All',     emoji: '🍽️' },
  { id: 'pizza',    label: 'Pizza',   emoji: '🍕' },
  { id: 'burger',   label: 'Burgers', emoji: '🍔' },
  { id: 'biryani',  label: 'Biryani', emoji: '🍛' },
  { id: 'chinese',  label: 'Chinese', emoji: '🥡' },
  { id: 'desserts', label: 'Desserts',emoji: '🍰' },
  { id: 'sushi',    label: 'Sushi',   emoji: '🍱' },
  { id: 'healthy',  label: 'Healthy', emoji: '🥗' },
];

const restaurants = [
  { id: 1, name: 'Spicy Palace',   emoji: '🍕', rating: 4.8, cuisine: 'Pizza, Italian',    tags: ['pizza'],    time: '25–35', minOrder: 199, badge: 'BESTSELLER', badgeVeg: false },
  { id: 2, name: 'Burger Bros',    emoji: '🍔', rating: 4.6, cuisine: 'Burgers, American', tags: ['burger'],   time: '20–30', minOrder: 149, badge: 'NEW',        badgeVeg: false },
  { id: 3, name: 'Biryani House',  emoji: '🍛', rating: 4.9, cuisine: 'Biryani, Mughlai',  tags: ['biryani'],  time: '35–45', minOrder: 249, badge: 'TOP RATED',  badgeVeg: false },
  { id: 4, name: 'Wok & Roll',     emoji: '🥡', rating: 4.5, cuisine: 'Chinese, Thai',     tags: ['chinese'],  time: '25–35', minOrder: 199, badge: 'VEG',        badgeVeg: true  },
  { id: 5, name: 'Sweet Dreams',   emoji: '🍰', rating: 4.7, cuisine: 'Desserts, Bakery',  tags: ['desserts'], time: '15–25', minOrder: 99,  badge: 'TRENDING',   badgeVeg: false },
  { id: 6, name: 'Sakura Sushi',   emoji: '🍱', rating: 4.8, cuisine: 'Japanese, Sushi',   tags: ['sushi'],    time: '30–40', minOrder: 299, badge: 'PREMIUM',    badgeVeg: false },
  { id: 7, name: 'Green Bowl',     emoji: '🥗', rating: 4.4, cuisine: 'Healthy, Salads',   tags: ['healthy'],  time: '20–30', minOrder: 179, badge: 'VEG',        badgeVeg: true  },
  { id: 8, name: 'The Curry Co.',  emoji: '🍲', rating: 4.6, cuisine: 'Indian, Curry',     tags: ['biryani'],  time: '30–40', minOrder: 229, badge: 'POPULAR',    badgeVeg: false },
];

export default restaurants;
