import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface LoginPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface LoginPageFormInput {
  email: string;
  password: string;
}
