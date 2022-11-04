import React from 'react';
import clsx from 'clsx';
import useBasicButtonViewModel from './BasicButton.ViewModel';
import { BasicButtonProps } from './BasicButton.Types';
import styles from './BasicButton.module.scss';

// This is a use case component and will be removed
function BasicButton(props: BasicButtonProps) {
  const { children, className } = props;

  const { handleClick, counter } = useBasicButtonViewModel(props);

  return (
    <button onClick={handleClick} className={clsx(styles.basicButton, className)}>
      Clicked {counter} times
      {children}
    </button>
  );
}

export default React.memo(BasicButton);
