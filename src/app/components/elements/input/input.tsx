import styles from './input.module.scss';
import { InputProps } from './input.types';
import clsx from 'clsx';
import { InputText } from 'primereact/inputtext';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, testingID, style, size, label, error, bottomLeftLabel, bottomRightLabel, ...p } = props;

  return (
    <label className={clsx('form-element-input form-control w-full', styles.input, className)} data-testid={testingID} style={style}>
      <div className="label">
        {label && <span className="label-text">{label}</span>}
        {error && <div className="label-text-alt text-error text-xs mt-1">{error}</div>}
      </div>
      <InputText
        {...p}
        className={clsx(
          'w-full !rounded-sm',
          error && 'input-error',
          size && `p-inputtext-${size}`,
        )}
        ref={ref}
      />
      <div className="label">
        {bottomLeftLabel && <span className="label-text-alt">{bottomLeftLabel}</span>}
        {bottomRightLabel && <span className="label-text-alt">{bottomRightLabel}</span>}
      </div>
    </label>
  );
});

Input.displayName = 'Input';

export default React.memo(Input);
