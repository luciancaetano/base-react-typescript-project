import clsx from 'clsx';
import useBasicButtonViewModel from './BasicButtonViewModel';
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

export default BasicButton;
