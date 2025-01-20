import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface SignupPageProps extends ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}

export interface SignupPageFormInput {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  contactPhone: string;
  clinicName: string;
  clinicAddress: string;
  professionType?: string;
}
