
import { sizes, variants } from './button.constants';
import styles from './button.module.scss';
import { ButtonProps } from './button.types';
import clsx from 'clsx';
import React from 'react';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          styles.button,
          'text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading && <>Loading...</>}
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span> {!isLoading && endIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default React.memo(Button);