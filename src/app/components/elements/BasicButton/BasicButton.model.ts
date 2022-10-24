import { useCallback } from 'react';
import { BasicButtonProps } from './BasicButton.types';

function useBasicButtonViewModel(props: BasicButtonProps) {
  const { onClick } = props;

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return {
    handleClick,
  };
}

export default useBasicButtonViewModel;
