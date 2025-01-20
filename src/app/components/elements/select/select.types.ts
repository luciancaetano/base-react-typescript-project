import { ITestableProps } from '@app/types/testing';
import React, { ReactNode } from 'react';

export interface ISelectOption<T = string>{
  label: string;
  value: T;
  className?: string;
  disabled?: boolean;
}

export interface SelectProps<T = string> extends React.PropsWithChildren<object>, ITestableProps, React.HtmlHTMLAttributes<HTMLInputElement> {
  className?: string;
  style?: React.CSSProperties;
  label?: ReactNode;
  error?: ReactNode;
  bottomLeftLabel?: ReactNode;
  bottomRightLabel?: ReactNode;
  size?: 'lg' | 'sm' | 'xs';
  inputClassName?: string;
  options: ISelectOption<T>[];
}
