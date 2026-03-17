const menus = {
  1: {
    'Pizzas': [
      { id: 'p1', name: 'Margherita Classic',   emoji: '🍕', desc: 'San Marzano tomatoes, fresh mozzarella, basil',       price: 299 },
      { id: 'p2', name: 'Pepperoni Feast',       emoji: '🍕', desc: 'Double pepperoni, cheese blend, jalapeños',           price: 399 },
      { id: 'p3', name: 'BBQ Chicken',           emoji: '🍕', desc: 'Smoked chicken, BBQ sauce, caramelised onions',       price: 449 },
    ],
    'Pasta': [
      { id: 'p4', name: 'Spaghetti Bolognese',  emoji: '🍝', desc: 'Slow-cooked beef ragù, parmesan',                     price: 349 },
      { id: 'p5', name: 'Penne Arrabbiata',      emoji: '🍝', desc: 'Spicy tomato sauce, cherry tomatoes, basil',          price: 299 },
    ],
    'Sides': [
      { id: 'p6', name: 'Garlic Bread',          emoji: '🥖', desc: 'Toasted sourdough with herb butter',                  price: 149 },
      { id: 'p7', name: 'Caesar Salad',          emoji: '🥗', desc: 'Romaine, croutons, parmesan, caesar dressing',        price: 199 },
    ],
  },
  2: {
    'Burgers': [
      { id: 'b1', name: 'Classic Smash',         emoji: '🍔', desc: 'Smashed beef patty, American cheese, pickles',        price: 249 },
      { id: 'b2', name: 'Double Trouble',        emoji: '🍔', desc: 'Double patty, bacon, special sauce, fried egg',       price: 349 },
      { id: 'b3', name: 'Crispy Chicken',        emoji: '🍗', desc: 'Buttermilk fried chicken, slaw, sriracha mayo',       price: 299 },
      { id: 'b4', name: 'Veggie Delight',        emoji: '🥬', desc: 'Black bean patty, avocado, roasted peppers',          price: 229 },
    ],
    'Sides & Drinks': [
      { id: 'b5', name: 'Loaded Fries',          emoji: '🍟', desc: 'Cheese sauce, bacon bits, jalapeños',                 price: 179 },
      { id: 'b6', name: 'Onion Rings',           emoji: '🧅', desc: 'Beer-battered crispy onion rings',                    price: 149 },
      { id: 'b7', name: 'Milkshake',             emoji: '🥤', desc: 'Chocolate / Vanilla / Strawberry',                    price: 199 },
    ],
  },
  3: {
    'Biryani': [
      { id: 'by1', name: 'Hyderabadi Dum Biryani', emoji: '🍛', desc: 'Slow-cooked basmati, whole spices, saffron',       price: 349 },
      { id: 'by2', name: 'Chicken Biryani',        emoji: '🍗', desc: 'Tender chicken, fragrant rice, fried onions',       price: 299 },
      { id: 'by3', name: 'Mutton Biryani',         emoji: '🍖', desc: 'Slow-braised mutton, aged basmati',                 price: 449 },
      { id: 'by4', name: 'Veg Dum Biryani',        emoji: '🥦', desc: 'Mixed veggies, paneer, aromatic spices',            price: 249 },
    ],
    'Kebabs': [
      { id: 'by5', name: 'Seekh Kebab',           emoji: '🍢', desc: 'Minced lamb, spices, grilled over charcoal',         price: 299 },
      { id: 'by6', name: 'Paneer Tikka',           emoji: '🧀', desc: 'Marinated paneer, bell peppers, mint chutney',       price: 249 },
    ],
  },
  4: {
    'Noodles & Rice': [
      { id: 'c1', name: 'Dragon Noodles',        emoji: '🍜', desc: 'Wok-tossed noodles, chilli oil, scallions',           price: 189 },
      { id: 'c2', name: 'Fried Rice',            emoji: '🍚', desc: 'Egg/veg fried rice with soy-ginger sauce',            price: 179 },
      { id: 'c3', name: 'Pad Thai',              emoji: '🥢', desc: 'Rice noodles, tofu, peanuts, tamarind',               price: 229 },
    ],
    'Mains': [
      { id: 'c4', name: 'Kung Pao Chicken',      emoji: '🍗', desc: 'Wok-fired chicken, peanuts, dried chilies',           price: 289 },
      { id: 'c5', name: 'Mapo Tofu',             emoji: '🫕', desc: 'Silken tofu, spicy bean paste, minced pork',          price: 249 },
    ],
    'Dim Sum': [
      { id: 'c6', name: 'Steamed Momos (6 pc)',  emoji: '🥟', desc: 'Pork or veg dumplings, dipping sauce',                price: 159 },
      { id: 'c7', name: 'Spring Rolls (4 pc)',   emoji: '🫔', desc: 'Crispy veggie rolls, sweet chilli sauce',              price: 139 },
    ],
  },
  5: {
    'Cakes & Pastries': [
      { id: 'd1', name: 'Belgian Chocolate Cake',emoji: '🍫', desc: 'Dark chocolate ganache, cocoa sponge',                price: 299 },
      { id: 'd2', name: 'Red Velvet',            emoji: '🎂', desc: 'Classic red velvet with cream cheese frosting',        price: 349 },
      { id: 'd3', name: 'Tiramisu',              emoji: '☕', desc: 'Coffee-soaked ladyfingers, mascarpone cream',          price: 259 },
    ],
    'Ice Cream': [
      { id: 'd4', name: 'Sundae Royale',         emoji: '🍨', desc: '3 scoops, hot fudge, whipped cream, cherry',          price: 199 },
      { id: 'd5', name: 'Mango Sorbet',          emoji: '🥭', desc: 'Fresh Alphonso mango, lime zest',                     price: 149 },
    ],
  },
  6: {
    'Sushi Rolls': [
      { id: 's1', name: 'Dragon Roll',           emoji: '🌊', desc: 'Shrimp tempura, avocado, tobiko',                     price: 499 },
      { id: 's2', name: 'Spicy Tuna',            emoji: '🐟', desc: 'Tuna, sriracha mayo, cucumber',                       price: 449 },
      { id: 's3', name: 'California Roll',       emoji: '🦀', desc: 'Crab, avocado, cucumber, sesame',                     price: 399 },
      { id: 's4', name: 'Rainbow Roll',          emoji: '🌈', desc: 'Assorted fish, avocado, cucumber',                    price: 549 },
    ],
    'Ramen': [
      { id: 's5', name: 'Tonkotsu Ramen',        emoji: '🍜', desc: 'Rich pork broth, chashu, soft egg, nori',             price: 389 },
      { id: 's6', name: 'Miso Ramen',            emoji: '🍜', desc: 'White miso broth, tofu, mushrooms, scallion',         price: 349 },
    ],
  },
  7: {
    'Power Bowls': [
      { id: 'g1', name: 'Buddha Bowl',           emoji: '🥗', desc: 'Quinoa, roasted veggies, tahini dressing',            price: 299 },
      { id: 'g2', name: 'Acai Bowl',             emoji: '🫐', desc: 'Acai blend, granola, fresh berries, honey',           price: 279 },
      { id: 'g3', name: 'Protein Bowl',          emoji: '💪', desc: 'Grilled chicken, sweet potato, greens',               price: 349 },
    ],
    'Wraps & Toast': [
      { id: 'g4', name: 'Falafel Wrap',          emoji: '🫔', desc: 'Crispy falafel, hummus, pickles, hot sauce',           price: 229 },
      { id: 'g5', name: 'Avocado Toast',         emoji: '🥑', desc: 'Sourdough, avocado, poached egg, chilli flakes',       price: 249 },
    ],
    'Juices': [
      { id: 'g6', name: 'Green Detox',           emoji: '🥤', desc: 'Spinach, cucumber, ginger, lemon, apple',             price: 149 },
      { id: 'g7', name: 'Immunity Boost',        emoji: '🍊', desc: 'Orange, carrot, turmeric, ginger',                    price: 159 },
    ],
  },
  8: {
    'Curries': [
      { id: 'cu1', name: 'Butter Chicken',       emoji: '🍗', desc: 'Creamy tomato base, fenugreek, garam masala',         price: 319 },
      { id: 'cu2', name: 'Dal Makhani',          emoji: '🫘', desc: 'Black lentils, cream, butter, slow-cooked',           price: 249 },
      { id: 'cu3', name: 'Paneer Butter Masala', emoji: '🧀', desc: 'Cottage cheese in rich tomato cashew gravy',          price: 289 },
      { id: 'cu4', name: 'Rogan Josh',           emoji: '🍖', desc: 'Slow-braised lamb, Kashmiri spices',                  price: 399 },
    ],
    'Breads & Rice': [
      { id: 'cu5', name: 'Butter Naan (2 pc)',   emoji: '🫓', desc: 'Soft leavened flatbread with butter',                 price: 99  },
      { id: 'cu6', name: 'Tandoori Roti (3 pc)', emoji: '🫓', desc: 'Whole wheat flatbread from clay oven',                price: 79  },
      { id: 'cu7', name: 'Jeera Rice',           emoji: '🍚', desc: 'Basmati rice with cumin and ghee',                    price: 149 },
    ],
  },
};

export default menus;
