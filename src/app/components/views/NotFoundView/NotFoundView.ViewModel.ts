import { useCallback } from 'react';
import { NotFoundViewProps } from './NotFoundView.types';

function useNotFoundViewViewModel({ }: NotFoundViewProps) {
  const handleClick = useCallback(() => {
    //
  }, []);

  return {
    handleClick,
  };
}

export default useNotFoundViewViewModel;
