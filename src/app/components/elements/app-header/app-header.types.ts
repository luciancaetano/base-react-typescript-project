import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AppHeaderProps extends React.PropsWithChildren<object>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
