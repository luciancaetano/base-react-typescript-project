import React from 'react';
import styles from './Button.module.scss';
import { IButtonProps } from './Button.types';

const Button: React.FC<IButtonProps> = ({ onClick, children }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
