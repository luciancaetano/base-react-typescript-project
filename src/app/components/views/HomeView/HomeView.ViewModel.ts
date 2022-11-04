import { useCallback } from 'react';
import useStore from './HomeView.Store';
import { HomeViewProps } from './HomeView.types';

function useHomeViewViewModel({ }: HomeViewProps) {
  const { count, increment, decrement } = useStore();

  const handleIncrementClick = useCallback(() => {
    increment();
  }, [increment]);

  const handleDecrementClick = useCallback(() => {
    decrement();
  }, [decrement]);

  return {
    count,
    handleIncrementClick,
    handleDecrementClick,
  };
}

export default useHomeViewViewModel;
