import { useCallback, useState } from 'react';
import { AppLayoutProps } from './AppLayout.types';

function useAppLayoutViewModel({ }: AppLayoutProps) {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleClick,
    counter,
  };
}

export default useAppLayoutViewModel;
