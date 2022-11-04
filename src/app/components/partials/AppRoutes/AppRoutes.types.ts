import { ITestableProps } from 'lens-ui';
import React from 'react';

export interface AppRoutesProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
