import { useCallback, useState } from 'react';
import { HomeViewProps } from './HomeView.types';

function useHomeViewViewModel({ }: HomeViewProps) {
  const [count, setCount] = useState(0);

  const handleIncrementClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const handleDecrementClick = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  return {
    count,
    handleIncrementClick,
    handleDecrementClick,
  };
}

export default useHomeViewViewModel;
