import React from 'react';
import { AppRouteNameType } from '@types';

export interface IAppLinkProps {
  className?: string;
  to: AppRouteNameType;
  params?: { [key: string]: string | number | null | undefined };
  children: React.ReactNode;
}
