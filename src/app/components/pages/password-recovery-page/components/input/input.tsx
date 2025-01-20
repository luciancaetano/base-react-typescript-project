import styles from './input.module.scss';
import { InputProps } from './input.types';
import clsx from 'clsx';
import React from 'react';

function Input(props: InputProps) {
  const { className, testingID, icon, name, error, styles: cssStyles, ...restProps } = props;

  return (
    <div className={clsx('signup-input', styles.input, className)} data-testid={testingID} style={cssStyles}>
      <label htmlFor={name} className="input input-bordered flex items-center gap-2">
        {icon && icon}
        <input
          name={name}
          className={clsx('w-full', error && 'input-error')}
          {...restProps}
        />
      </label>
      {error && <div className="text-error text-xs mt-1">{error}</div>}
    </div>
  );
}

export default React.memo(Input);
