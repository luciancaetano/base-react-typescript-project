import React from 'react';
import './Button.scss';

interface IProps {
  onClick?: () => void;
}

const Button = ({ onClick, children }: React.PropsWithChildren<IProps>) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);

export default Button;
