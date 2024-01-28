import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AppHeaderProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
