import React from 'react';

interface IProps {
  onClick?: () => void;
}

const Button = ({ onClick, children }: React.PropsWithChildren<IProps>) => (
  <button className="buttonElement" onClick={onClick}>
    {children}
  </button>
);

export default Button;
