import { useCallback } from 'react';
import useStore from './BasicButton.Store';
import { BasicButtonProps } from './BasicButton.types';

function useBasicButtonViewModel({ onClick }: BasicButtonProps) {
  const { count, increment } = useStore();

  const handleClick = useCallback(() => {
    increment();
    onClick?.();
  }, [increment, onClick]);

  return {
    handleClick,
    counter: count,
  };
}

export default useBasicButtonViewModel;
