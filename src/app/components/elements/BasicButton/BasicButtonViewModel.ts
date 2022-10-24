import { useCallback, useState } from 'react';
import { BasicButtonProps } from './BasicButton.types';

function useBasicButtonViewModel({ onClick }: BasicButtonProps) {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
    onClick?.();
  }, [onClick]);

  return {
    handleClick,
    counter,
  };
}

export default useBasicButtonViewModel;
