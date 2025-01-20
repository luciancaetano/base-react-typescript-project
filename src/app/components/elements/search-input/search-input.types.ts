import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface SearchInputProps extends ITestableProps, React.HtmlHTMLAttributes<HTMLInputElement> {
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'lg' | 'sm' | 'xs';
}
