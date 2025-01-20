/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './select.module.scss';
import { SelectProps } from './select.types';
import clsx from 'clsx';
import React from 'react';

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
  const { className, testingID, style, size, label, error, bottomLeftLabel, bottomRightLabel, inputClassName, options, ...p } = props;

  return (
    <label className={clsx('form-element-input form-control w-full', styles.input, className)} data-testid={testingID} style={style}>
      <div className="label">
        {label && <span className="label-text">{label}</span>}
        {error && <div className="label-text-alt text-error text-xs mt-1">{error}</div>}
      </div>
      <select className={clsx('select select-bordered w-full rounded-sm', error && 'input-error', size && `input-${size}`, inputClassName)} {...p as any} ref={ref}>
        {options.map(opt => (
          <option value={opt.value} disabled={opt.disabled} className={opt.className} key={opt.value}>{opt.label}</option>
        ))}
      </select>

      <div className="label">
        {bottomLeftLabel && <span className="label-text-alt">{bottomLeftLabel}</span>}
        {bottomRightLabel && <span className="label-text-alt">{bottomRightLabel}</span>}
      </div>
    </label>
  );
});

Select.displayName = 'Select';

export default React.memo(Select);
