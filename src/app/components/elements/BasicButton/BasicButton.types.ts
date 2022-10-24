import React from 'react';

export interface BasicButtonProps extends React.PropsWithChildren<{}> {
  classNames?: string;
  onClick?: () => void;
}

export interface BasicButtonState {
  counter: number;
  increase: () => void;
  decrease: () => void;
}
