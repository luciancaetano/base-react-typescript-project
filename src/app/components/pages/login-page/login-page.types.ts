import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface LoginPageProps extends React.PropsWithChildren<object>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface LoginPageFormInput {
  username: string;
}