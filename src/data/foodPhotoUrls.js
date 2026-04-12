/**
 * Unsplash image URLs. Use photo slugs that exist on images.unsplash.com
 * (invalid IDs return 404 and broken images in the UI).
 */
const q = 'ixlib=rb-4.1.0&auto=format&fit=crop&q=80';
const sz = (w, h) => `&w=${w}&h=${h}`;

export const foodPhoto = (path, w = 400, h = 400) =>
  `https://images.unsplash.com/${path}?${q}${sz(w, h)}`;
