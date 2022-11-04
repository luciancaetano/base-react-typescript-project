import { ITestableProps } from 'lens-ui';
import React from 'react';

export interface HomeViewProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface HomeViewStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incBy: (amount: number) => void;
  decBy: (amount: number) => void;
}
