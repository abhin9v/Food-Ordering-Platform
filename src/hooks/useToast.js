import { useDispatch } from 'react-redux';
import { showToast } from '../redux/slices/uiSlice';

/**
 * Convenience hook for dispatching toast notifications.
 * Usage: const toast = useToast();
 *        toast.success('Item added!');
 *        toast.error('Something went wrong');
 */
const useToast = () => {
  const dispatch = useDispatch();

  return {
    success: (message) => dispatch(showToast({ message, type: 'success' })),
    error:   (message) => dispatch(showToast({ message, type: 'error'   })),
    info:    (message) => dispatch(showToast({ message, type: ''        })),
  };
};

export default useToast;
