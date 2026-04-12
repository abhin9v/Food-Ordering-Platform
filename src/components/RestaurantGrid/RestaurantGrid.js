import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSearchQuery, selectCategory, selectSearchQuery } from '../../redux/slices/filterSlice';
import { CATEGORIES } from '../../data/restaurants';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import useFilteredRestaurants from '../../hooks/useFilteredRestaurants';
import styles from './RestaurantGrid.module.css';

const RestaurantGrid = ({ limit }) => {
  const dispatch      = useDispatch();
  const category      = useSelector(selectCategory);
  const searchQuery   = useSelector(selectSearchQuery);
  const filtered      = useFilteredRestaurants();
  const displayed     = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      {/* Search bar */}
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="🔍  Search restaurants, cuisines…"
          value={searchQuery}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
        />
      </div>

      {/* Category chips */}
      <div className={styles.chips}>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`${styles.chip} ${category === cat.id ? styles.chipActive : ''}`}
            onClick={() => dispatch(setCategory(cat.id))}
          >
            <img className={styles.chipThumb} src={cat.image} alt="" width={28} height={28} aria-hidden />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {displayed.length === 0 ? (
        <p className={styles.empty}>No restaurants match your search. Try something else!</p>
      ) : (
        <div className={styles.grid}>
          {displayed.map(r => <RestaurantCard key={r.id} restaurant={r} />)}
        </div>
      )}
    </div>
  );
};

export default RestaurantGrid;
