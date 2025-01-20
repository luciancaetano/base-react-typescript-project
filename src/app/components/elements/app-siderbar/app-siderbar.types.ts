import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface AppSiderbarProps
  extends React.PropsWithChildren<object>,
    ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarExpanded: boolean;
  setSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
