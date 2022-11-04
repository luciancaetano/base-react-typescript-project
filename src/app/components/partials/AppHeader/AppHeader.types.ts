import { ITestableProps } from 'lens-ui';
import React from 'react';

export interface AppHeaderProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
