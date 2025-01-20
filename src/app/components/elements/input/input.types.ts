import { ITestableProps } from '@app/types/testing';
import { InputTextProps } from 'primereact/inputtext';
import React, { ReactNode } from 'react';

export interface InputProps extends ITestableProps, Omit<InputTextProps, 'size'> {
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  label?: ReactNode;
  error?: ReactNode;
  bottomLeftLabel?: ReactNode;
  bottomRightLabel?: ReactNode;
  size?: 'lg' | 'sm' | 'xs';
}
