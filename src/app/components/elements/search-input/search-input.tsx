import styles from './search-input.module.scss';
import { SearchInputProps } from './search-input.types';
import clsx from 'clsx';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import React from 'react';

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  const { className, testingID, style, size, ...p } = props;

  return (
    <IconField iconPosition="right" className={clsx('search-input ml-4 mr-4 flex flex-1', styles.input, className)} data-testid={testingID} style={style}>
      <InputIcon className="pi pi-search pr-2"></InputIcon>
      <InputText {...p} className={clsx('rounded-sm flex flex-1', size && `p-inputtext-${size}`)} ref={ref}/>
    </IconField>
  );
});

SearchInput.displayName = 'Input';

export default React.memo(SearchInput);
