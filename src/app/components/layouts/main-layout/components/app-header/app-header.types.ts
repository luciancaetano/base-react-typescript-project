import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AppHeaderProps extends ITestableProps, React.PropsWithChildren {
  className?: string;
  styles?: React.CSSProperties;
}
