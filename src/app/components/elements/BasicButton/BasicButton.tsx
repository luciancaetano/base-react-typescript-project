import React from 'react';
import clsx from 'clsx';
import useBasicButtonViewModel from './BasicButton.ViewModel';
import { BasicButtonProps } from './BasicButton.types';
import styles from './BasicButton.module.scss';

function BasicButton(props: BasicButtonProps) {
  const { children, classNames } = props;

  const { handleClick, counter } = useBasicButtonViewModel(props);

  return (
    <button onClick={handleClick} className={clsx(styles.basicButton, classNames)}>
      Clicked {counter} times
      {children}
    </button>
  );
}

export default React.memo(BasicButton);
