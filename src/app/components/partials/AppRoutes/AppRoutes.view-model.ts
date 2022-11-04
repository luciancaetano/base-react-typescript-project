import { useCallback, useState } from 'react';
import { AppRoutesProps } from './AppRoutes.types';

function useAppRoutesViewModel({ }: AppRoutesProps) {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleClick,
    counter,
  };
}

export default useAppRoutesViewModel;
