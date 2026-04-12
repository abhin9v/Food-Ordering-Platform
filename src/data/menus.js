import { foodPhoto } from './foodPhotoUrls';

/** Image IDs verified against images.unsplash.com (HEAD 200, Apr 2026). */
const menus = {
  1: {
    Pizzas: [
      { id: 'p1', name: 'Margherita Classic',   image: foodPhoto('photo-1513104890138-7c749659a591'), desc: 'San Marzano tomatoes, fresh mozzarella, basil',       price: 299 },
      { id: 'p2', name: 'Pepperoni Feast',       image: foodPhoto('photo-1565299624946-b28f40a0ae38'), desc: 'Double pepperoni, cheese blend, jalapeños',           price: 399 },
      { id: 'p3', name: 'BBQ Chicken',           image: foodPhoto('photo-1466978913421-dad2ebd01d17'), desc: 'Smoked chicken, BBQ sauce, caramelised onions',       price: 449 },
    ],
    Pasta: [
      { id: 'p4', name: 'Spaghetti Bolognese',  image: foodPhoto('photo-1621996346565-e3dbc646d9a9'), desc: 'Slow-cooked beef ragù, parmesan',                     price: 349 },
      { id: 'p5', name: 'Penne Arrabbiata',      image: foodPhoto('photo-1593560708920-61dd98c46a4e'), desc: 'Spicy tomato sauce, cherry tomatoes, basil',          price: 299 },
    ],
    Sides: [
      { id: 'p6', name: 'Garlic Bread',          image: foodPhoto('photo-1600891964092-4316c288032e'), desc: 'Toasted sourdough with herb butter',                  price: 149 },
      { id: 'p7', name: 'Caesar Salad',          image: foodPhoto('photo-1540189549336-e6e99c3679fe'), desc: 'Romaine, croutons, parmesan, caesar dressing',        price: 199 },
    ],
  },
  2: {
    Burgers: [
      { id: 'b1', name: 'Classic Smash',         image: foodPhoto('photo-1568901346375-23c9450c58cd'), desc: 'Smashed beef patty, American cheese, pickles',        price: 249 },
      { id: 'b2', name: 'Double Trouble',        image: foodPhoto('photo-1551782450-a2132b4ba21d'), desc: 'Double patty, bacon, special sauce, fried egg',       price: 349 },
      { id: 'b3', name: 'Crispy Chicken',        image: foodPhoto('photo-1561758033-d89a9ad46330'), desc: 'Buttermilk fried chicken, slaw, sriracha mayo',       price: 299 },
      { id: 'b4', name: 'Veggie Delight',        image: foodPhoto('photo-1563379926898-05f4575a45d8'), desc: 'Black bean patty, avocado, roasted peppers',          price: 229 },
    ],
    'Sides & Drinks': [
      { id: 'b5', name: 'Loaded Fries',          image: foodPhoto('photo-1550547660-d9450f859349'), desc: 'Cheese sauce, bacon bits, jalapeños',                 price: 179 },
      { id: 'b6', name: 'Onion Rings',           image: foodPhoto('photo-1586190848861-99aa4a171e90'), desc: 'Beer-battered crispy onion rings',                    price: 149 },
      { id: 'b7', name: 'Milkshake',             image: foodPhoto('photo-1572490122747-3968b75cc699'), desc: 'Chocolate / Vanilla / Strawberry',                    price: 199 },
    ],
  },
  3: {
    Biryani: [
      { id: 'by1', name: 'Hyderabadi Dum Biryani', image: foodPhoto('photo-1589302168068-964664d93dc0'), desc: 'Slow-cooked basmati, whole spices, saffron',       price: 349 },
      { id: 'by2', name: 'Chicken Biryani',        image: foodPhoto('photo-1589302168068-964664d93dc0'), desc: 'Tender chicken, fragrant rice, fried onions',       price: 299 },
      { id: 'by3', name: 'Mutton Biryani',         image: foodPhoto('photo-1544025162-d76694265947'), desc: 'Slow-braised mutton, aged basmati',                 price: 449 },
      { id: 'by4', name: 'Veg Dum Biryani',        image: foodPhoto('photo-1603133872878-684f208fb84b'), desc: 'Mixed veggies, paneer, aromatic spices',            price: 249 },
    ],
    Kebabs: [
      { id: 'by5', name: 'Seekh Kebab',           image: foodPhoto('photo-1551218808-94e220e084d2'), desc: 'Minced lamb, spices, grilled over charcoal',         price: 299 },
      { id: 'by6', name: 'Paneer Tikka',           image: foodPhoto('photo-1585937421612-70a008356fbe'), desc: 'Marinated paneer, bell peppers, mint chutney',       price: 249 },
    ],
  },
  4: {
    'Noodles & Rice': [
      { id: 'c1', name: 'Dragon Noodles',        image: foodPhoto('photo-1612929633738-8fe44f7ec841'), desc: 'Wok-tossed noodles, chilli oil, scallions',           price: 189 },
      { id: 'c2', name: 'Fried Rice',            image: foodPhoto('photo-1603133872878-684f208fb84b'), desc: 'Egg/veg fried rice with soy-ginger sauce',            price: 179 },
      { id: 'c3', name: 'Pad Thai',              image: foodPhoto('photo-1621996346565-e3dbc646d9a9'), desc: 'Rice noodles, tofu, peanuts, tamarind',               price: 229 },
    ],
    Mains: [
      { id: 'c4', name: 'Kung Pao Chicken',      image: foodPhoto('photo-1561758033-d89a9ad46330'), desc: 'Wok-fired chicken, peanuts, dried chilies',           price: 289 },
      { id: 'c5', name: 'Mapo Tofu',             image: foodPhoto('photo-1585937421612-70a008356fbe'), desc: 'Silken tofu, spicy bean paste, minced pork',          price: 249 },
    ],
    'Dim Sum': [
      { id: 'c6', name: 'Steamed Momos (6 pc)',  image: foodPhoto('photo-1488477181946-6428a0291777'), desc: 'Pork or veg dumplings, dipping sauce',                price: 159 },
      { id: 'c7', name: 'Spring Rolls (4 pc)',   image: foodPhoto('photo-1551024506-0bccd828d307'), desc: 'Crispy veggie rolls, sweet chilli sauce',              price: 139 },
    ],
  },
  5: {
    'Cakes & Pastries': [
      { id: 'd1', name: 'Belgian Chocolate Cake',image: foodPhoto('photo-1578985545062-69928b1d9587'), desc: 'Dark chocolate ganache, cocoa sponge',                price: 299 },
      { id: 'd2', name: 'Red Velvet',            image: foodPhoto('photo-1504754524776-8f4f37790ca0'), desc: 'Classic red velvet with cream cheese frosting',        price: 349 },
      { id: 'd3', name: 'Tiramisu',              image: foodPhoto('photo-1517248135467-4c7edcad34c4'), desc: 'Coffee-soaked ladyfingers, mascarpone cream',          price: 259 },
    ],
    'Ice Cream': [
      { id: 'd4', name: 'Sundae Royale',         image: foodPhoto('photo-1551024506-0bccd828d307'), desc: '3 scoops, hot fudge, whipped cream, cherry',          price: 199 },
      { id: 'd5', name: 'Mango Sorbet',          image: foodPhoto('photo-1488477181946-6428a0291777'), desc: 'Fresh Alphonso mango, lime zest',                     price: 149 },
    ],
  },
  6: {
    'Sushi Rolls': [
      { id: 's1', name: 'Dragon Roll',           image: foodPhoto('photo-1579584425555-c3ce17fd4351'), desc: 'Shrimp tempura, avocado, tobiko',                     price: 499 },
      { id: 's2', name: 'Spicy Tuna',            image: foodPhoto('photo-1586190848861-99aa4a171e90'), desc: 'Tuna, sriracha mayo, cucumber',                       price: 449 },
      { id: 's3', name: 'California Roll',       image: foodPhoto('photo-1579584425555-c3ce17fd4351'), desc: 'Crab, avocado, cucumber, sesame',                     price: 399 },
      { id: 's4', name: 'Rainbow Roll',          image: foodPhoto('photo-1579584425555-c3ce17fd4351'), desc: 'Assorted fish, avocado, cucumber',                    price: 549 },
    ],
    Ramen: [
      { id: 's5', name: 'Tonkotsu Ramen',        image: foodPhoto('photo-1569718212165-3a8278d5f624'), desc: 'Rich pork broth, chashu, soft egg, nori',             price: 389 },
      { id: 's6', name: 'Miso Ramen',            image: foodPhoto('photo-1612929633738-8fe44f7ec841'), desc: 'White miso broth, tofu, mushrooms, scallion',         price: 349 },
    ],
  },
  7: {
    'Power Bowls': [
      { id: 'g1', name: 'Buddha Bowl',           image: foodPhoto('photo-1546069901-ba9599a7e63c'), desc: 'Quinoa, roasted veggies, tahini dressing',            price: 299 },
      { id: 'g2', name: 'Acai Bowl',             image: foodPhoto('photo-1540189549336-e6e99c3679fe'), desc: 'Acai blend, granola, fresh berries, honey',           price: 279 },
      { id: 'g3', name: 'Protein Bowl',          image: foodPhoto('photo-1568901346375-23c9450c58cd'), desc: 'Grilled chicken, sweet potato, greens',               price: 349 },
    ],
    'Wraps & Toast': [
      { id: 'g4', name: 'Falafel Wrap',          image: foodPhoto('photo-1600891964092-4316c288032e'), desc: 'Crispy falafel, hummus, pickles, hot sauce',           price: 229 },
      { id: 'g5', name: 'Avocado Toast',         image: foodPhoto('photo-1541519227354-08fa5d50c44d'), desc: 'Sourdough, avocado, poached egg, chilli flakes',       price: 249 },
    ],
    Juices: [
      { id: 'g6', name: 'Green Detox',           image: foodPhoto('photo-1563379926898-05f4575a45d8'), desc: 'Spinach, cucumber, ginger, lemon, apple',             price: 149 },
      { id: 'g7', name: 'Immunity Boost',        image: foodPhoto('photo-1572490122747-3968b75cc699'), desc: 'Orange, carrot, turmeric, ginger',                    price: 159 },
    ],
  },
  8: {
    Curries: [
      { id: 'cu1', name: 'Butter Chicken',       image: foodPhoto('photo-1561758033-d89a9ad46330'), desc: 'Creamy tomato base, fenugreek, garam masala',         price: 319 },
      { id: 'cu2', name: 'Dal Makhani',          image: foodPhoto('photo-1585937421612-70a008356fbe'), desc: 'Black lentils, cream, butter, slow-cooked',           price: 249 },
      { id: 'cu3', name: 'Paneer Butter Masala', image: foodPhoto('photo-1589302168068-964664d93dc0'), desc: 'Cottage cheese in rich tomato cashew gravy',          price: 289 },
      { id: 'cu4', name: 'Rogan Josh',           image: foodPhoto('photo-1544025162-d76694265947'), desc: 'Slow-braised lamb, Kashmiri spices',                  price: 399 },
    ],
    'Breads & Rice': [
      { id: 'cu5', name: 'Butter Naan (2 pc)',   image: foodPhoto('photo-1600891964092-4316c288032e'), desc: 'Soft leavened flatbread with butter',                 price: 99  },
      { id: 'cu6', name: 'Tandoori Roti (3 pc)', image: foodPhoto('photo-1600891964092-4316c288032e'), desc: 'Whole wheat flatbread from clay oven',                price: 79  },
      { id: 'cu7', name: 'Jeera Rice',           image: foodPhoto('photo-1603133872878-684f208fb84b'), desc: 'Basmati rice with cumin and ghee',                    price: 149 },
    ],
  },
};

export default menus;
