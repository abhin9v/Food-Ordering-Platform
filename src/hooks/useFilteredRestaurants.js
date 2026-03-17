import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectCategory, selectSearchQuery } from '../redux/slices/filterSlice';
import restaurants from '../data/restaurants';

/**
 * Returns the filtered restaurant list based on Redux filter state.
 * Memoized to avoid unnecessary re-computation.
 */
const useFilteredRestaurants = () => {
  const category    = useSelector(selectCategory);
  const searchQuery = useSelector(selectSearchQuery);

  return useMemo(() => {
    return restaurants.filter(r => {
      const matchCategory = category === 'all' || r.tags.includes(category);
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [category, searchQuery]);
};

export default useFilteredRestaurants;
