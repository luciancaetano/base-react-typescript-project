import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface PasswordRecoveryPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface PasswordRecoveryPageFormInput {
  email: string;
  confirmEmail: string;
}
