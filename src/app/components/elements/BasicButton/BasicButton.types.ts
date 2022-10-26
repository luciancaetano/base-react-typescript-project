import React from 'react';

export interface BasicButtonProps extends React.PropsWithChildren<{}> {
  classNames?: string;
  onClick?: () => void;
}

export interface BasicStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incBy: (amount: number) => void;
  decBy: (amount: number) => void;
}
