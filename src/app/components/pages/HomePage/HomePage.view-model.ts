import { useCallback, useState } from 'react';
import { HomePageProps } from './HomePage.types';

function useHomePageViewModel({ }: HomePageProps) {
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

export default useHomePageViewModel;
