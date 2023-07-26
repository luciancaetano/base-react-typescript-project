import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface HomePageProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface HomePageStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  incBy: (amount: number) => void;
  decBy: (amount: number) => void;
}
