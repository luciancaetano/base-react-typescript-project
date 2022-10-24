import React from 'react';
import clsx from 'clsx';
import useBasicButtonViewModel from './BasicButton.model';
import { BasicButtonProps } from './BasicButton.types';
import styles from './BasicButton.module.scss';

function BasicButton(props: BasicButtonProps) {
  const { children, classNames } = props;

  const { handleClick } = useBasicButtonViewModel(props);

  return (
    <button onClick={handleClick} className={clsx(styles.basicButton, classNames)}>
      {children}
    </button>
  );
}

export default BasicButton;
