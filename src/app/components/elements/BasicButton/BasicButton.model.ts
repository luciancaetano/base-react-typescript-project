import { useCallback } from 'react';
import useStore from './BasicButton.store';
import { BasicButtonProps } from './BasicButton.types';

function useViewModel(props: BasicButtonProps) {
  const { counter, increase } = useStore();
  const { onClick } = props;

  const handleClick = useCallback(() => {
    increase();
    onClick?.();
  }, [increase, onClick]);

  return {
    handleClick,
    counter,
  };
}

export default useViewModel;
