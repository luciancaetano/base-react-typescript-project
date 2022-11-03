import { useCallback } from 'react';
import useStand from './BasicButton.Store';
import { BasicButtonProps } from './BasicButton.types';

function useBasicButtonViewModel({ onClick }: BasicButtonProps) {
  const { count, increment } = useStand();

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
